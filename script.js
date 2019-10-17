//global variables
const gridContainer = document.querySelector('#gridContainer');
const gridItems = document.createElement('div');
const squares = document.querySelectorAll('.gridItem');

//Create grid squares
//const gridContainer = document.querySelector('#gridContainer');
for (i = 0; i < 256; i++) {
  const gridItems = document.createElement('div');
  gridContainer.appendChild(gridItems);
  gridItems.classList.add('gridItem');
  assignGridId();
};

//Assign gridItem IDs
function assignGridId() {
  const squares = document.querySelectorAll('.gridItem');
  for (let i = 0; i < squares.length; i++) {
    squares[i].id = i + 1;
  };
}  

//Reset Function
function resetGrid() {
  document.querySelectorAll('.gridItem').forEach((div) => {
    div.classList.remove('hoverEffect');
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
  resetGrid();
  if (userInput < 256) {
    console.log('less than 256');
    for (i = 256; i > (256 - userInput); i--) {
      //remove 'i' child nodes
    }
  } else {
    console.log(userInput);
    for (i = 256; i < userInput; i++) {
      const gridItems = document.createElement('div');
      gridContainer.appendChild(gridItems);
      gridItems.classList.add('gridItem');
      assignGridId();
    }
  }
  mouseOver();
}

//Resize Button
document.querySelectorAll('#resize').forEach((button) => {
  button.addEventListener('click', e => {
   resizeGrid();
  });
});

//Mouseover event listener
document.querySelectorAll('.gridItem').forEach((div) => {
  div.addEventListener('mouseover', e => {
    div.classList.add('hoverEffect');
    //console.log(div.id);
  });
});

//Mouseover function
function mouseOver() {
  document.querySelectorAll('.gridItem').forEach((div) => {
    div.addEventListener('mouseover', e => {
      div.classList.add('hoverEffect');
      //console.log(div.id);
    });
  });
}