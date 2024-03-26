
var textarea = document.getElementById("keylogger");


window.addEventListener('', (e) => {
    let keyPressed = e.key;
    textarea.value += keyPressed;
});


