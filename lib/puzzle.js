// todo
// 1. Select two elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to a click 
button.addEventListener("click", () => {
  // 3. Change the DOM (add the class active)
  hint.classList.add("active");
});

const isNextToEmpty = (emptyTile, clickedTile) => {
  // some stuff here
  // get the xe/ye of empty and xc/yc clicked
  const emptyX = emptyTile.cellIndex; // x pos
  const emptyY = emptyTile.parentElement.rowIndex;

  const clickedX = clickedTile.cellIndex; // x pos
  const clickedY = clickedTile.parentElement.rowIndex; // row index should be used on a "row"
  // if (Math.abs(xe-xc) + Math.abs(ye-yc) == 1)
  // that's already a boolean!
  return (Math.abs(emptyX-clickedX) + Math.abs(emptyY-clickedY) === 1);
};

const swapTiles = (emptyTile, clickedTile) => {
  emptyTile.classList.remove("empty");
  clickedTile.classList.add("empty");
  emptyTile.innerText = clickedTile.innerText;
  clickedTile.innerText = "";
}

const doWeWin = (tiles) => {
  const winningCombi = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  const actualCombi = [];
  tiles.forEach((tile) => {
    actualCombi.push(tile.innerText);
  });

  return winningCombi === actualCombi.join();
}

// Select all tiles
const tiles = document.querySelectorAll("td");
// nodelist iterate over the list
tiles.forEach((tile) => {
  // 1 listen for click on each of the tiles
  tile.addEventListener("click", (event) => {
    // 2 check if the empty tile is next to the clicked tile
    // create a function 
    // (name: isNextToEmpty, params: emptyTile, clickedTile, return: true/false)
    const emptyTile = document.querySelector(".empty");
    const clickedTile = event.currentTarget;
    if (isNextToEmpty(emptyTile, clickedTile)) {
      // 3 swap the tile
      swapTiles(emptyTile, clickedTile);
      // 4 when the list is ordered by asc display WIN
      if (doWeWin(tiles)) {
        alert("You won!");
      }
    }
  });
});
//