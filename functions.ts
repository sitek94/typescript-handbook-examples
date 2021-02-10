///////////////////////////////////////////////////////
// RECAP
///////////////////////////////////////////////////////

// Named function
function namedFunc() {
  console.log(`I'm named function`);
}

// Anonymous function
let anonymFunc = function () {
  console.log(`I'm anonymous function`);
};

///////////////////////////////////////////////////////
// TYPING THE FUNCION
///////////////////////////////////////////////////////

function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
};
