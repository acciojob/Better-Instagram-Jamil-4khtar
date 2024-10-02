//your code here

let images = document.querySelectorAll(".image");

let c = 1;
images.forEach(img => {
    img.id = "div"+c
    c++
    img.addEventListener("dragstart", dragStart)
    img.addEventListener("dragover", dragOver)
    img.addEventListener("drop", drop)
});


function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function dragOver(e) {
    e.preventDefault()
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    
    let temp = e.target.id;
    e.target.id = data;
    document.getElementById(data).id = temp;
}
