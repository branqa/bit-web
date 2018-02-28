var play = document.querySelector('body');

play.onclick = function clickOnPlayGround(event){
    var player =document.querySelector('#player');
    player.style.left = event.clientX + 'px';
    player.style.top = event.clientY+ 'px';
}
