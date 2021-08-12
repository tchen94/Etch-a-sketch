// Creating the 16 x 16 grid //

// Grabbing the container
const container = document.getElementById('container');

newSketch();

// Nested loop to make the 16x16 grid
function newSketch() {
    for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
            const div = document.createElement('div');
            div.className = 'pixels';
            div.id = 'pixel' + (y + 1);
            container.appendChild(div);
        }
        const next = document.createElement('br');
        container.appendChild(next)
    }
}

// Hover Effect//

// Grabbing the pixels
const pixels = document.querySelectorAll('.pixels');

pixels.forEach(cell => cell.addEventListener('mouseover', (e) => {
    colorIn(cell);
}))

function colorIn(cell) {
    cell.style.backgroundColor = 'black';
}

// Clear Button //

const clrButton = document.createElement('button');
clrButton.className = 'clear-button';
clrButton.appendChild(document.createTextNode('Clear'));
container.appendChild(clrButton);

clrButton.addEventListener('click', clearSketch);

function clearSketch() {
    pixels.forEach(cell => cell.style.backgroundColor = 'white');
}





