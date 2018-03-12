 let createList = (src, name) => {
     var d = $('<div>');
     var i = $('<img>');
     var p = $('<p>');
     $(d).attr('class', 'little');
     $(i).attr('src', src );
     $(p).text(name);
     $(d).append(i);
     $(d).append(p);
     $('#list').append(d);
    
}

export default createList;