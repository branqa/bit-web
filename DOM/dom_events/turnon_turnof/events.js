function toggle() {

    var inputButton = document.querySelector("body");
    inputButton.classList.toggle("background_click");

}


var active = false;
var handler = null; 
var secondBut = document.getElementById('second');

function turn(){

    if(active == false){
        handler = setInterval(function(){toggle()},1000);
        active = true; 
        secondBut.value = 'TurnOff';
    
    }
    else{
        clearInterval(handler);
        active = false;
        secondBut.value = 'TurnOn';
    
        
    }
}



