// "experiment" is an experiment in learning as I code. The first feature I wanted to implement was an on-click event that changes some visual aspect within the browser window, a.k.a what the user sees. The goal for the app is to eventually develop visualizations of some different algorithms that can be trigggered by on-click events, and to make them visually appealing.

//Each function below was custom written unless otherwise noted.

//First I created the visual elements I wanted to manipulate [see 'index.html', 'styles.css'] and then, thinking through how I wanted to manipulate them, googling/researching necessary syntaxes to perform microfunction, and through trial and error

// 'clickHere' changes the initial square from red to blue in the browser window. [JavaScript + jQuery]
const clickHere = () => {
  document.getElementById('square').style.cssText = 'background-color: blue';
}

// 'reset' reverts the initial square's to it's original color (red) and removes all additional squares from the browser window /and DOM. [JavaScript + jQuery]
const reset = () => {
  document.getElementById('square').style.cssText = null;
  $("div").remove(".newSquare");
}

//*SCRAP CODE*
//let div = document.querySelector('#square');
//newSquare.body.appendChild(newSquare)

// 'addOne' generates a new square div. [JavaScript + jQuery]
const addOne = () => {
  const newSquare = document.createElement("div");
  newSquare.className = "newSquare";
  //newSquare.id = 'square';
  //console.log(newSquare)
  $('.frame').append(newSquare)
}

const arr = [0, 1, 2, 3, "four", false, true, 7, 8, 9, 10.0]
console.log(arr)
console.log(arr[5])

// Progress report: App working, code clean enough. Next goal(s): *make it so that the 'Click Here' button turns new squares blue as well *write a new function that doe something cool that the user can see