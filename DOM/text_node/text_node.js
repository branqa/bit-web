function presentText() {
    var firstLiTag = document.querySelector("li").textContent;
    alert(firstLiTag);
}

presentText();

function takeSomeText(text) {

    var lastLiTag = document.querySelector("li:last-of-type");
    console.log(lastLiTag);
    lastLiTag.textContent = text;
}

takeSomeText("This is new text");