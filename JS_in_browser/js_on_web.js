function print(message) {
    console.log(message);
}

print('Hello JavaScript!');

function information() {
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
}
information();

function isOnline() {
    if (navigator.onLine) {
        console.log("online")
    } else {
        console.log("offline");
    }
}

isOnline();

function screen1(){
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.height);
    
}

screen1(); 

function loc(){
    console.log('Full URL address is ' + location.href);
    console.log('Domain name is ' + location.hostname);
    console.log('Used protocol is ' + location.protocol);
    console.log('Parameters are ' + location.search);
}

loc();

function rel(){
    return location.reload();
}

// rel();

// function red(){
//     return location.replace ('https://www.gsmarena.com/');
// }

// red();

var storage = localStorage;

function pass(){
    storage.setItem('Surname', 'Lora');
    storage.setItem('Name','Izzy');
}

pass();

function getData(key){
    if(storage.getItem(key)==null){
        console.log('There is no data!');
    } else {
        console.log(storage.getItem(key));
    }
}

getData('Name');

function remo(){
    storage.clear();
    console.log(storage);
}

remo();


// function play(){
//     history.back();
// }

// play();

// function play1(){
//     history.forward();
// }

// play1();

function play2(){
    history.go(2);
}

play2();