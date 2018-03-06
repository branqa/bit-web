$(function(){
       
    var i=0;
    $('body').on('click', function(event){
        i++;
        if(i<11){

        var player = $('#player');
        $(player).css({
            'left' : event.pageX,
            'top' : event.pageY
        })
    }
})
    $('#stop').on('click', function(){
        
    $('body').off('click');
    })
})