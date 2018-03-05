$(function() {

    $('li:first').addClass('bottom');   

    $('li').addClass('uppercase');
    $('.active').addClass('newcolor');

    var central = ($('li').length-1)/2; 
    $('li:eq('+ central+')').addClass('background');
}

)

