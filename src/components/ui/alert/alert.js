function displayAlerts( message, type = 'danger', className ){
    const iconDanger = `
        <svg width="16" height="16" class="d-block flex-shrink-0">
            <use href="./src/assets/images/sprite.svg#exclamationDiamond"></use>
        </svg>
    `;
    const iconSuccess = `
        <svg width="16" height="16" class="d-block flex-shrink-0">
            <use href="./src/assets/images/sprite.svg#checkCircle"></use>
        </svg>
    `;
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
            ${ type === 'danger' ?  iconDanger : type === 'success' ? iconSuccess : '' }
            <span class="d-block">${ message }</span>
        </div>
    `;
}
export default displayAlerts;