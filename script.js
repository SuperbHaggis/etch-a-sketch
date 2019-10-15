//Create grid squares
const gridContainer = document.querySelector('#gridContainer');
for (i = 0; i < 256; i++) {
  const gridItems = document.createElement('div');
  gridContainer.appendChild(gridItems);
  gridItems.classList.add('gridItem');
}

//Assign gridItem IDs
const squares = document.querySelectorAll('.gridItem');
for (let i = 0; i < squares.length; i++) {
  squares[i].id = 'square' + i;
}
  
//Hover event listener
document.querySelectorAll('.gridItem').forEach((div) => {
  div.addEventListener('mouseenter', e => {
    div.classList.add('hoverEffect');
    console.log(div.id);
  });
});