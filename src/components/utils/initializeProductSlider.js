import '@splidejs/splide/css';
import Splide from "@splidejs/splide";

let mainSliderInstance = null;
let thumbnailSliderInstance = null;

const initializeProductSlider = ( mainSlider, thumbnailSlider) => {
    if ( mainSlider?.splide ) mainSlider.splide.destroy( true );
    if ( thumbnailSlider?.splide ) thumbnailSlider.splide.destroy( true );
    thumbnailSliderInstance = new Splide( thumbnailSlider, {
        fixedWidth: 100,
        height: 100,
        gap: 12,
        pagination: false,
        arrows: false,
        // focus: 'center',
        isNavigation: true
    });
    mainSliderInstance = new Splide( mainSlider, {
        pagination: false,
        arrows: false,
    });
    mainSliderInstance.sync( thumbnailSliderInstance );
    mainSliderInstance.mount();
    thumbnailSliderInstance.mount();
}
export default initializeProductSlider;