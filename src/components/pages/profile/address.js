import { db } from '../../../firebase-config';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { Country, State, City } from 'country-state-city';
import { getCurrentUser } from '../../authentication/auth';
import displayAlerts from '../../ui/alert/alert';

const addressForm = document.getElementById( 'addressForm' );
const addressEl = document.getElementById( 'address' );
const countryEl = document.getElementById( 'country' );
const stateEl = document.getElementById( 'state' );
const cityEl = document.getElementById( 'city' );
const zipEl = document.getElementById( 'zip' );
const saveAddress = document.getElementById( 'saveAddress' );
const descriptionEl = document.getElementById( 'description' );
const saveAddressAs = document.querySelectorAll( 'input[name="saveAddressAs"]' );
const urlParams = new URLSearchParams( window.location.search );
const addressId = urlParams.get( 'addressId' );

const india = Country.getCountryByCode( 'IN' );
let selectedCountry = '';
let selectedState = '';
if( stateEl ) stateEl.disabled = true;
if( cityEl ) cityEl.disabled = true;
if( countryEl ){
    countryEl.insertAdjacentHTML( 'beforeend', `<option value="${ india.isoCode }">${ india.name }</option>` );
    countryEl.addEventListener( 'change', e => {
        selectedCountry = e.target.value;
        const states = State.getStatesOfCountry( e.target.value );
        states.forEach( state => {
            if( stateEl ){
                stateEl.insertAdjacentHTML( 'beforeend', `<option value="${ state.isoCode }">${ state.name }</option>` );
                stateEl.disabled = false;
            }
        } );
    } );
}
if( stateEl ){
    stateEl.addEventListener( 'change', e => {
        selectedState = e.target.value;
        const cities = City.getCitiesOfState( selectedCountry, selectedState );
        if( cityEl ) cityEl.innerHTML = '<option value="" selected disabled>Select City</option>';
        cities.forEach( city => {
            if( cityEl ){
                cityEl.insertAdjacentHTML( 'beforeend', `<option value="${ city.name }">${ city.name }</option>` );
                cityEl.disabled = false;
            }
        } );
    } );
}

const validateAddressForm = () => {
    let defaultAddress = '';
    document.querySelectorAll( '.alert' ).forEach( el => el.remove() );
    if( addressEl && !addressEl.value.trim() ) return addressEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Please Enter Your Address' ) );
    if( countryEl && !countryEl.value.trim() ) return countryEl.insertAdjacentHTML( 'afterend', displayAlerts( 'Country is required' ) );
    if( stateEl && !stateEl.value.trim() ) return stateEl.insertAdjacentHTML( 'afterend', displayAlerts( 'State is required' ) );
    if( cityEl && !cityEl.value.trim() ) return cityEl.insertAdjacentHTML( 'afterend', displayAlerts( 'City is required' ) );
    if( zipEl && !zipEl.value.trim() ) return zipEl.insertAdjacentHTML( 'afterend', displayAlerts( 'ZIP Code is required' ) );
    if( saveAddressAs ){
        saveAddressAs.forEach( radio => {
            if( radio.checked ) defaultAddress = radio.value;
        } );
    }
    return {
        address: addressEl.value.trim(),
        country: countryEl.value.trim(),
        state: stateEl.value.trim(),
        city: cityEl.value.trim(),
        zip: zipEl.value.trim(),
        description: descriptionEl.value.trim(),
        default: defaultAddress
    }
}

const renderAddress = async () => {
    const user = await getCurrentUser();
    if( user ){
        if( addressId ){
            if( saveAddress ) saveAddress.disabled = true;
            const addressRef = doc( db, 'users', user.uid, 'addresses', addressId );
            const addressSnap = await getDoc( addressRef );
            if( addressSnap.exists() ){
                const address = addressSnap.data();
                console.log(address);
                if( addressEl ) addressEl.value = address.address || '';
                if( countryEl ) countryEl.value = address.country || '';
                const states = State.getStatesOfCountry( address.country );
                states.forEach( state => {
                    if( stateEl ) stateEl.insertAdjacentHTML( 'beforeend', `<option value="${ state.isoCode }">${ state.name }</option>` );
                } );
                if( stateEl ){
                    stateEl.disabled = false;
                    stateEl.value = address.state || '';
                }
                const cities = City.getCitiesOfState( address.country, address.state );
                if( cityEl ) cityEl.innerHTML = '<option value="" selected disabled>Select City</option>';
                cities.forEach( city => {
                    if( cityEl ) cityEl.insertAdjacentHTML( 'beforeend', `<option value="${ city.name }">${ city.name }</option>` );
                } );
                if( cityEl ){
                    cityEl.disabled = false;
                    cityEl.value = address.city || '';
                }
                if( zipEl ) zipEl.value = address.zip || '';
                if( descriptionEl ) descriptionEl.value = address.description || '';
                if( saveAddressAs && address.default ) saveAddressAs.forEach( radio => radio.checked = radio.value === address.default );
            }
        } else{
            if( addressForm ){
                addressForm.addEventListener( 'submit', async e => {
                    e.preventDefault();
                    const addressData = validateAddressForm();
                    if( addressData ){
                        try{
                            if( saveAddress ) saveAddress.disabled = true;
                            await addDoc( collection( db, 'users', user.uid, 'addresses' ), addressData );
                            addressForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Address Added Successfully!', 'success', 'mt-0 mb-4' ) );
                            addressForm.reset();
                        } catch( err ){
                            console.log( err );
                            addressForm.insertAdjacentHTML( 'afterbegin', displayAlerts( 'Failed to add address' ) );
                        } finally{
                            if( saveAddress ) saveAddress.disabled = false;
                        }
                    }
                } );
            }
        }
    } else{

    }
}
renderAddress();