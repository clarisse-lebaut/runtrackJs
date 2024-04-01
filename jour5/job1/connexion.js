let id = (id) => document.getElementById(id);
let formClass = (formClass) => document.getElementsByClassName(formClass);

let email = id("email"),
    mdp = id("mdp"),
    form = id("form"),
    errorMSg = formClass("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailValid = invalForm(email, 0, "email requis");
    let mdpValid = invalForm(mdp, 1, "mdp requis");
    if (!emailValid && !mdpValid) {
        errorMSg[0].innerHTML = "email requis";
        errorMSg[1].innerHTML = "mpd requis";
        email.style.border = "2px solid red";
        mdp.style.border = "2px solid red";
    }

    else if (!emailValid) {
        errorMSg[0].innerHTML = "email requis";
        email.style.border = "2px solid red";
    }

    else if (!mdpValid) {
        errorMSg[1].innerHTML = "mdp requis";
        mdp.style.border = "2px solid red";
    }

    else{
        return;
    }

});

let invalForm = (id, serial, message) => {
    if (id.value.trim()=== "") {
        errorMSg[serial].innerHTML = message;
        id.style.border = "2px solid red"
        return false
    }

    else {
        errorMSg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        return true
    }
}