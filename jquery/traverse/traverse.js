$(function(){
    var img = $('img:eq(1)');
    img.removeClass('selected');
    var picture = img.parent().next().children('img:eq(1)');
    picture.addClass('selected');
    
})