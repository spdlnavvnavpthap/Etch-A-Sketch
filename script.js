const container = document.querySelector('.container');

//given an input size, draw a red-white alternating chessboard-liked grid
function drawGrid(gridSize){
    for (var i = 0; i < gridSize; i++){
        let divRowNode = document.createElement("div");
        divRowNode.setAttribute("class","rows");
        divRowNode.setAttribute("id",`row${i}`);
        container.appendChild(divRowNode);

        for (var j =0; j < gridSize; j++){
            let divBoxNode = document.createElement('div');
            if( (i + j) % 2 === 0)
                divBoxNode.setAttribute("class","redBoxes");
            else if ((i + j) % 2 === 1)
                divBoxNode.setAttribute("class","whiteBoxes");
            divBoxNode.setAttribute("id",`box${i}${j}`);
            divRowNode.appendChild(divBoxNode);
        }
    }
}
// a function to remove the drawn grid
function removeGrid(){
    let rows = document.querySelectorAll(".rows");
    let rowsArray = Array.from(rows);
    rowsArray.forEach(element => element.remove());
}

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click',function(){
    removeGrid();
    let numberOfboxes = prompt("How many squares per side to make the new grid?");
    if (numberOfboxes > 100) {numberOfboxes = 100};
    drawGrid(numberOfboxes);
})