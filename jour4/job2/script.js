/* --- avec la clé --- */
function jsonValuKey(jsonString, key){
    let jsonObject = JSON.parse(jsonString);
    if (jsonObject.hasOwnProperty(key)) {
        return jsonObject[key];
    }
    else {
        return null;
    }
};
// la variable se place en dehors de la fonction
let maChaineJSON = '{"name" : "La Plateforme_", "adress" : "8 rue d Hozier", "city" : "Marseille", "nb_staff" : "11", "creation" : "2019"}'
// on imprime la variable avec l'action que doit réaliser la fonction
console.log(jsonValuKey(maChaineJSON, "city"));

/* --- sans la clé --- */
function jsonValuKey(jsonString, key){
    let jsonObject = JSON.parse(jsonString);
    if (jsonObject.hasOwnProperty(key)) {
        return jsonObject[key];
    }
    else {
        return null;
    }
};

let maChaineJSON2 = '{"name" : "La Plateforme_", "adress" : "8 rue d Hozier", "nb_staff" : "11", "creation" : "2019"}'
console.log(jsonValuKey(maChaineJSON2, "city"));
