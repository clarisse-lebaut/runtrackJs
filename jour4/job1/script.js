
let bouton = document.getElementById('button')

bouton.addEventListener('click', function showpara(){
    fetch("./expression.txt")
        .then(response => response.text())
        .then(data => {
            let newParagraphe = document.createElement('p');
            newParagraphe.textContent = data
            document.body.appendChild(newParagraphe)
            console.log(data)
        })
        .catch(error => console.error(error));
});
