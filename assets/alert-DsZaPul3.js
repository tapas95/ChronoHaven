function i(c,s="danger",e){return`
        <div class="alert fs-sm lh-1 d-flex align-items-center gap-2 fw-medium mt-2 ${(n=>{switch(n){case"danger":return"bg-danger-subtle text-danger";case"warning":return"bg-warning-subtle text-warning";case"success":return"bg-success-subtle text-success";default:return""}})(s)} ${e||""}">
            ${s==="danger"?`
        <svg width="16" height="16" class="d-block flex-shrink-0">
            <use href="./src/assets/images/sprite.svg#exclamationDiamond"></use>
        </svg>
    `:s==="success"?`
        <svg width="16" height="16" class="d-block flex-shrink-0">
            <use href="./src/assets/images/sprite.svg#checkCircle"></use>
        </svg>
    `:""}
            <span class="d-block">${c}</span>
        </div>
    `}export{i as d};
