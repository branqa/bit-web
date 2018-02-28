function validateForm() {

    var inputItem = document.querySelectorAll('input');
   
    for(var i = 0; i < inputItem.length; i++) {
        if(inputItem[i].hasAttribute('required') && inputItem[i].value== "") {
            inputItem[i].classList.add("red_border");
        }
    }
}

