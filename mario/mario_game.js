var background = document.querySelector('body');

background.addEventListener('keydown', function(event) {
    if (event.key == 'ArrowRight'){
        document.querySelector('img').setAttribute('src', './images/mario_running.gif');
    }


});

background.addEventListener('keyup', function(event) {
 
        document.querySelector('img').setAttribute('src', './images/mario.png');


});


// background.addEventListener('keydown', function(event) {
//     document.querySelector('#mario-run').classList.add('visible');
//     if (event.key == 'ArrowRight'){
//         document.querySelector('#mario-stop').classList.add('visible');
//     } else {
//         document.querySelector('#mario-run').classList.add('visible')
//     }


// });

