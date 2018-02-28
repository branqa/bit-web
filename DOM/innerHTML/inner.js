function makeDropdownlist(array,node) {

    // var optionList;
    // var dropList = document.createElement("select");
    // var newText;
    // for(var i = 0; i < array.length; i++ ) {
    //     optionList = document.createElement('option');
    //      dropList.appendChild(optionList);
    //      newText=document.createTextNode(array[i]);
    //      optionList.appendChild(newText);
    // }

    var divDropList = document.querySelector(node);
    //divDropList.appendChild(dropList);
    var inHTML = "<select>";

    for (var i = 0; i < array.length; i++ ){
     inHTML += "<option>"+array[i]+"</option>";
    }
    inHTML+="</select>";

    divDropList.innerHTML = inHTML;
}

makeDropdownlist(["history", "math", "biology"], "div");
makeDropdownlist(["blue", "green", "red"], "#second");



