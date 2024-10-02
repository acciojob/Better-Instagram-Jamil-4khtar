//your code here
// let divArr = ["div1", "div2", "div3", "div4", "div5", "div6"];

let images = document.querySelectorAll(".image");

// let c = 1;
images.forEach(img => {
    // img.id = "div"+c
    // c++
    img.addEventListener("dragstart", dragStart)
    img.addEventListener("dragover", dragOver)
    img.addEventListener("drop", drop)
    // console.log(img.style);
    
});


function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function dragOver(e) {
    e.preventDefault()
}

function drop(e) {
    e.preventDefault();
    let draggedDivId = e.dataTransfer.getData('text');
    let draggedDiv = document.getElementById(draggedDivId);
    let droppedOnDiv = e.target;
    
    // Swap backgroundImage
    let temp = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = droppedOnDiv.style.backgroundImage;
    droppedOnDiv.style.backgroundImage = temp;
}