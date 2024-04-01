let id = (id) => document.getElementById(id);
let formClass = (formClass) => document.getElementsByClassName(formClass);

let nom = id("nom"),
    prenom = id("prenom")
    email = id("email"),
    mdp = id("mdp"),
    vmdp = id("vmdp")
    adresse = id("adresse"),
    codepostal = id ("codepostal"),
    form = id("form"),
    errorMSg = formClass("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nomValid = invalForm(nom, 0, "nom requis");
    let prénomValid = invalForm(prenom, 1, "prénom requis");
    let adresseValid = invalForm(adresse, 2, "adresse requise");
    let codepostaleValid = invalForm(codepostal, 3, "code postal requis, que des chiffres");
    let emailValid = invalForm(email, 4, "email requis");
    let mdpValid = invalForm(mdp, 5, "mdp requis");
    let identiqueValid = invalForm(vmdp, 6, "pas identique")
    let conditionsmdp = checkconditionsmdp(mdp, 7, 'pas toutes les conditions')
    if (!nomValid && !prénomValid && !emailValid && !mdpValid && !adresseValid && !codepostaleValid && !identiqueValid && !conditionsmdp) {
        errorMSg[0].innerHTML = "nom requis";
        errorMSg[1].innerHTML = "prénom requis";
        errorMSg[2].innerHTML = "adress requise";
        errorMSg[3].innerHTML = "code postal requis, que des chiffres";
        errorMSg[4].innerHTML = "email requis";
        errorMSg[5].innerHTML = "mpd requis";
        errorMSg[6].innerHTML = "pas identique";
        errorMSg[7].innerHTML = "pas conditions";
 
        nom.style.border = "2px solid red";
        prenom.style.border = "2px solid red";
        email.style.border = "2px solid red";
        mdp.style.border = "2px solid red";
        vmdp.style.border = "2px solid red";
        adresse.style.border = "2px solid red";
        codepostal.style.border = "2px solid red";
    }

    else if (!nomValid) {
        errorMSg[0].innerHTML = "nom requis";
        nom.style.border = "2px solid red";
    }

    else if (!prénomValid) {
        errorMSg[1].innerHTML = "prénom requis";
        prenom.style.border = "2px solid red";
    }

    else if (!emailValid) {
        errorMSg[2].innerHTML = "email requis";
        email.style.border = "2px solid red";
    }

    else if (!mdpValid) {
        errorMSg[3].innerHTML = "mdp requis";
        mdp.style.border = "2px solid red";
    }

    else if (!adresseValid) {
        errorMSg[4].innerHTML = "adresse requise";
        adresse.style.border = "2px solid red";
    }

    else if (!codepostaleValid) {
        errorMSg[5].innerHTML = "code postale requis";
        codepostal.style.border = "2px solid red";
        }

    else if (!codepostaleValid) {
        errorMSg[6].innerHTML = "pas identique";
        codepostal.style.border = "2px solid red";
        }

    else{
        return;
    }

});

function checkmotdepasse(passwordField, serial, message){
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*]).{8,}$/;
    if (!passwordRegex.test(passwordField.value)){
        errorMSg[serial].innerHTML = message;
        passwordField.stye.border = "2px solid red";
        return false
    }
    else {
        errorMSg[serial].innerHTML = "";
        passwordField.style.border = "2px solid green";
        return true;
    }
}


let invalForm = (id, serial, message) => {    
    if (isNaN(codepostal.value)) {
        return false; 
    }

    if (id.value.trim() === "") {
        errorMSg[serial].innerHTML = message;
        id.style.border = "2px solid red"
        return false;
    }

    else {
        errorMSg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        return true;
    }
}
