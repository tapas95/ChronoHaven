function displayAlerts( message, type = 'danger', iconClass, className ){
    const alertType = type => {
        switch( type ){
            case 'danger':
                return 'bg-danger-subtle text-danger';
            case 'warning':
                return 'bg-warning-subtle text-warning';
            case 'success':
                return 'bg-success-subtle text-success';
            default:
                return '';
        }
    }
    return `
        <div class="alert fs-sm lh-1 d-flex align-items-center gap-2 fw-medium mt-2 ${ alertType( type ) } ${ className ? className : '' }">
            <i class="bi ${ iconClass }"></i>
            <span class="d-block">${ message }</span>
        </div>
    `;
}
export default displayAlerts;