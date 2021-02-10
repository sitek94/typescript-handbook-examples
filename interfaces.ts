///////////////////////////////////////////////////////
// FIRST INTERFACE
///////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////
// OPTIONAL PROPERTIES
///////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////
// READ-ONLY PROPERTIES
///////////////////////////////////////////////////////

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

// READ-ONLY vs. CONST
///////////////////////////////////////////////////////
// `const` for variables
// `readonly` for properties

///////////////////////////////////////////////////////
// EXCESS PROPERTY CHECKS
///////////////////////////////////////////////////////

// let mySquare = createSquare({ colour: "red", width: 100 }); // ❌ Error

// Getting around excessive property checks using Type Assertion:
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// Better approach
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let squareOptions = { colour: "red" };
let mySquare2 = createSquare2(squareOptions);

///////////////////////////////////////////////////////
// FUNCTION TYPES
///////////////////////////////////////////////////////
interface SearchFunc {
  (source: string, subString: string): boolean;
}

{
  let mySearch: SearchFunc;

  mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  };
}

{
  let mySearch: SearchFunc;

  mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
  };
}

///////////////////////////////////////////////////////
// INDEXABLE TYPES
///////////////////////////////////////////////////////

interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string; // ❌ Error
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

// Readonly
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob"];

// myArray[2] = "John"; // ❌ Error

///////////////////////////////////////////////////////
// CLASS TYPES
///////////////////////////////////////////////////////

// Difference between the static and instance sides of classes
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// Another approach with class expression
const DigitalClockTwo: ClockConstructor = class Clock
  implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};

///////////////////////////////////////////////////////
// EXTENDING INTERFACES
///////////////////////////////////////////////////////
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// An interface can extend multiple interfaces, creating a combination of all of the interfaces.

interface PenStroke {
  penWidth: number;
}

interface NewSquare extends Square, Shape, PenStroke {}

let newSquare = {} as NewSquare;
newSquare.color = "blue";
newSquare.sideLength = 10;
newSquare.penWidth = 5.0;

///////////////////////////////////////////////////////
// HYBRID TYPES
///////////////////////////////////////////////////////

{
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }

  let c = getCounter();

  c(10);
  c.reset();
  c.interval = 5.0;
}
