function border(){
   var bd= document.getElementsByClassName("selected")[0];
   bd.className="";
   var secondimgBorder = bd.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
   secondimgBorder.className = "selected";

}

border();

