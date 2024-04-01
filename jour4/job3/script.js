let sortById = document.getElementById("id");
let sortByName = document.getElementById("nom");
let sortByType = document.getElementById("type");
let filtrer = doucment.getElementById("filtrer");

let jsonData;

fetch('pokemon.json')
    .then((reponse) => reponse.json())
    .then((jsonData) => {
        jsonData = data;
        displayData(jsonData);
    });

    filtrer.addEventListener('click', () => {
        let filteredData = jsonData.filter((item) => {
            let nameMatch = sortById.value ? item.name.includes(nameFilter.value) : true;
            let minAgeMatch = sortByName.value ? item.age >= parseInt(minAge.value) : true;
            let maxAgeMatch = sortByType.value ? item.age <= parseInt(maxAge.value) : true;
            return nameMatch && minAgeMatch && maxAgeMatch;
    });
  displayData(filteredData);
});

// je n'ai pas réussi à crée le filtrage, ma fonction ne trouve pas le fichier pokemon.json