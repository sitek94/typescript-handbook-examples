/**
 *
 * First interface
 *
 */

{
  // Simple example
  function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object " };

  printLabel(myObj);
}

{
  // Example using interface
  interface LabeledValue {
    label: string;
  }

  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object " };

  printLabel(myObj);
}

/**
 *
 * Optional properties
 *
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width ** 2;
  }

  return newSquare;
}

console.log(createSquare({ color: "black" }));

/**
 *
 * Readonly properties
 *
 */

// Objects
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // ❌ Error

// Arrays
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;


// ro[0] = 12;      // ❌ Error
// ro.push(5);      // ❌ Error
// ro.length = 100; // ❌ Error
// a = ro;          // ❌ Error

// Even this is illegal:
// a = ro; // ❌ Error

// However we can overwrite it with type assertion
a = ro as number[];

/**
 * Readonly vs const.
 * 
 * `const` for variables
 * 
 * `readonly` for properties 
 */