//Global Variables
const gridContainer = document.querySelector('#gridContainer');

//Create initial grid container and squares
for (i = 0; i < 256; i++) {
  const gridItems = document.createElement('div');
  gridContainer.appendChild(gridItems);
  gridItems.classList.add('gridItem');
  mouseOver();
};

//Reset Function
function resetGrid() {
  document.querySelectorAll('.gridItem').forEach((div) => {
    div.classList.remove('stageOne');
  });
};

//Reset Button
document.querySelectorAll('#reset').forEach((button) => {
  button.addEventListener('click', e => {
    resetGrid();
  });
});

//Resize Function
function resizeGrid() {
  let userInput = window.prompt('How many squares per side?', '???');
  let itemSide = (400 / userInput);
  let squares = document.querySelectorAll('.gridItem');
  resetGrid();
  if (userInput < (squares.length / squares.length)) {
    for (i = 0; i < (squares.length - (userInput * userInput)); i++) {
      squares.remove(i);
    }
    resizeItems(userInput, itemSide);
  } else {
    for (i = (squares.length); i < (userInput * userInput); i++) {
      const gridItems = document.createElement('div');
      gridContainer.appendChild(gridItems);
      gridItems.classList.add('gridItem');
      gridItems.style.minWidth = (itemSide + 'px');
      gridItems.style.minHeight = (itemSide + 'px');
    };
    resizeItems(userInput, itemSide);
  }
  mouseOver();
}

//Resize Button
document.querySelectorAll('#resize').forEach((button) => {
  button.addEventListener('click', e => {
   resizeGrid();
  });
});

//Mouseover function
function mouseOver() {
  document.querySelectorAll('.gridItem').forEach((div) => {
    div.addEventListener('mouseover', e => {
      div.classList.add('stageOne');
      //console.log(div.id);
    });
  });
}

//Change gridItem size
function resizeItems(userInput, itemSide) {
  for (i = 0; i < (userInput * userInput); i++) {
    document.getElementsByClassName('gridItem')[i].style.minHeight = (itemSide + 'px');
    document.getElementsByClassName('gridItem')[i].style.minWidth = (itemSide + 'px');
  }
}