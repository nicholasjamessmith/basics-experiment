const clickHere = () => {
  document.getElementById('square').style.cssText = 'background-color: blue';
}

const reset = () => {
  document.getElementById('square').style.cssText = null;
  $("div").remove(".newSquare");
}

//let div = document.querySelector('#square');

//newSquare.body.appendChild(newSquare)
const addOne = () => {
  const newSquare = document.createElement("div");
  newSquare.className = "newSquare";
  console.log(newSquare)
  $('body').append(newSquare)
}