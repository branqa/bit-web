import createList from './UIModule.js';

$('input').keydown(function (event) {
    

    if (event.keyCode === 13) {
        var username = $('input').val();
        
        var request = $.ajax({
            url: `https://api.github.com/search/users?q=${username}`,
            method: "GET",
        });
        request.done(function (msg) {
            for (var i = 0; i < 6; i++) {
                var avatar = msg.items[i].avatar_url;
                var name = msg.items[i].login;
                // $(`p:eq(${i})`).text(name);
                // $(`img:eq(${i})`).attr("src", avatar);
                createList(avatar, name);
                console.log(avatar);
                
            }
            
        });
        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });
        
      
    }
})




