function c(s,t="danger",r,e){return`
        <div class="alert fs-sm lh-1 d-flex align-items-center gap-2 fw-medium mt-2 ${(n=>{switch(n){case"danger":return"bg-danger-subtle text-danger";case"warning":return"bg-warning-subtle text-warning";case"success":return"bg-success-subtle text-success";default:return""}})(t)} ${e||""}">
            <i class="bi ${r}"></i>
            <span class="d-block">${s}</span>
        </div>
    `}export{c as d};
