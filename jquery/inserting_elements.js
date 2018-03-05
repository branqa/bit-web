$(function () {
    var gallery = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg'];
    var newDiv = $('<div></div>');
    for (var i = 0; i < gallery.length; i++) {
        var newImg = $('<img>');
        newImg.attr({
            'src': gallery[i]
            // 'class':left
        });

        $(newDiv).append(newImg);
    }
    $('body').append(newDiv);
    var newTitle = $('<h1>Gallery images</h1>');
    $(newDiv).before(newTitle);

    $('img').each(function (index, element) {
        var size = Math.floor(400 * Math.random() + 200);
        $(element).css('width', size);
        $(element).css('float', 'left');

    })
    $('img').each(function (index, element) {
        if (parseInt($(element).css('width')) > 400) {
            $(element).css('border', '3px solid red');
            return false;
        }
    })

})