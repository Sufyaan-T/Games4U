doccument.addEventListener("DOMContentLoader", () => {
    const loginForm = documet.querySelector("#login");
    const createAccontForm = document.querySelector("createAccount");

    doccument.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        createAccontForm.classList.remove("formHidden")
    });

    doccument.querySelector("#linkLogIn").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccontForm.classList.add("formHidden")
    });

});
