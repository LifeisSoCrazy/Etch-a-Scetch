const container = document.getElementsByClassName("container")[0];
const mouse_hover = document.getElementsByClassName("mouse-hover")[0];

// Make a div of 16*16
function sketch() {
    for (let i=0; i<256; i ++) {
        let square = document.createElement("div");
        square.classList.add('square');
        container.appendChild(square);
    }
}

sketch()
square = document.getElementsByClassName('square')
square.addEventListener('mouseover', function() {
    square.backgroundcolor = 'black';
})
        


// Make a trail with Event Listener


// style the divs 16x16