const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

//function init() {

//}

//log which key 'keydown' was pressed in the 'input' node
//const input = document.querySelector('input')
//input.addEventListener('keydown', function(e) {
  //console.log(e.which)
//})
///


// Key codes for A, B, and C keys.
const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function init(e) {
//function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}
