///////////////////////////////////////////////////////
// Recap
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
// Typing the function
///////////////////////////////////////////////////////
{
  function add(x: number, y: number): number {
    return x + y;
  }

  let myAdd = function (x: number, y: number): number {
    return x + y;
  };
}

///////////////////////////////////////////////////////
// Writing the function type
///////////////////////////////////////////////////////
{
  let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
}

///////////////////////////////////////////////////////
// Inferring the types
///////////////////////////////////////////////////////

// The parameters 'x' and 'y' have the type number
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// myAdd has the full function type
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
