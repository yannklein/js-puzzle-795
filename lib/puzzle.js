// ////////////////
// Rehearsal
// ////////////////
const music = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
// 1. Select elements! (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to an event (click on the button)
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM, add active class to hint!
  hint.classList.add("active");
  music.play()
});

// ////////////////
// Live code
// ////////////////

const didWeWin = (tiles) => {
  const numbers = [];
  tiles.forEach((tile) => {
    numbers.push(tile.innerText);
  });
  console.log(numbers.join());

  return numbers.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
};

const swapeTiles = (tile) => {
  const emptyTile = document.querySelector(".empty");
  emptyTile.classList.remove("empty");
  emptyTile.innerText = tile.innerText;

  tile.innerText = "";
  tile.classList.add("empty");
}

const isNearEmpty = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;

  const emptyTile = document.querySelector(".empty");
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  //  Math.abs(tileColumn - emptyTileColumn) // should <= than 1
  //  Math.abs(tileRow - emptyTileRow) // should <= than 1
  //  Math.abs(tileColumn - emptyTileColumn) + Math.abs(tileRow - emptyTileRow) // is equal to 1
  return (Math.abs(tileColumn - emptyTileColumn) + Math.abs(tileRow - emptyTileRow) == 1)
  // should return true/false
};
// 1. Select all the tiles (nodelist)
const tiles = document.querySelectorAll("td");
console.log(tiles);
// 2. iterate through each tile
tiles.forEach((tile) => {
  // 3. listen to an event(click)
  tile.addEventListener("click", (event) => {
    console.log(event)
    // 4. check if the tile is next to an empty space
    const clickedTile = event.currentTarget; // the html element that has been clicked!
    if(isNearEmpty(clickedTile)) {
      console.log("next to empty tile!")
      // 5. swap the empty place with the tile
      swapeTiles(clickedTile);
      // 6. check if the player wins
      if (didWeWin(tiles)) {
        alert("You won!");
      }
    }
    
  });
});



