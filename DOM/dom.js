
//    var list = document.getElementById("ul2");
  
// list.className='back-blue';

// function trigg(){
//     var ls = document.getElementsByTagName("li");
//    for (var i= 0;i<ls.length;i++){
//        ls[i].className = 'back-green';
//    }  
// }

// trigg();

// function lastLs(){
//     var last = document.querySelectorAll("ul");
//     var last1=last[last.length-1].querySelectorAll("li")
//     for (var i=0;i<last1.length;i++){
//     last1[i].className = 'back-red';
//     }
    
// }
// lastLs();

// function ls2(){
//     var ll= document.querySelectorAll("ul:last-of-type li");
//     for (var i=0;i<ll.length;i++){
//     ll[i].className = 'back-red';
//     }
// }
// ls2();

function find(){
var ac = document.getElementsByClassName("a")[0];
ac.className = "";
var sib = ac.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
sib.className="a";

}

find();



