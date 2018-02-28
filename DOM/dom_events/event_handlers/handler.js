var button = document.querySelector('#btn');

function presentMessage() {
    var textIn = document.getElementById('text-input').value;
    var txt = document.createTextNode(textIn);
    var newp = document.createElement('p');
    newp.appendChild(txt);
    var listOfP = document.querySelector('div');
    listOfP.appendChild(newp);
}

button.onclick = presentMessage;

document.querySelector("#text-input").onkeydown = function(event) {
    if (event.keyCode == 13) {
        presentMessage();
    }
}