/* tslint:disable:no-unused-variable */

/**
 * Boolean
 */
let isDone: boolean = false;

/**
 *
 * Number
 *
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b101010;
let octal: number = 0o744;
let big: bigint = 100n;

// console.log(decimal);
// console.log(hex);
// console.log(binary);
// console.log(octal);
// console.log(big * big);

/**
 *
 * String
 *
 */
let color: string = "blue";
color = "red";
// color = 33; -> Error

let fullName: string = "Bob Brown";
let age: number = 37;
let sentence: string = `Hello, I'm ${fullName}

I'll be ${age + 1} years old next month`;

/**
 *
 * Arrray
 *
 */
let list: number[] = [1, 2, 3];

// Using generic array type Array<elemType>
let list2: Array<number> = [1, 2, 3];

/**
 *
 * Tuple
 *
 */

// Declare a tuple
let x: [string, number];

// Initialize it
x = ["Hello", 10];

// Initialize it incorrectly
// x = [10, 'hello']; // ❌ Error

// When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substring(1));

// console.log(x[1].substring(2)); // ❌ Error

// Accessing an element outside the set of known indices fails with an error:
// x[3] = 'word'; // ❌ Error

// console.log(x[5].toString()); // ❌ Error

/**
 *
 * Enum
 *
 */

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

// By default enums begin numbering members starting at 0.
console.log(Color);

// Change default numbering
enum Color2 {
  Red = 2, // -> 2
  Green, // -> 3
  Blue, // -> 4
}
console.log(Color2);

// Set them manually
enum Color3 {
  Red = 1,
  Green = 10,
  Blue = 100,
}
console.log(Color3);

// Access by numeric value or the name of that value
enum Color4 {
  Red = 10,
}
console.log(Color4.Red); // -> 10
console.log(Color4[10]); // -> Red

/**
 *
 * Unknown
 *
 */
let notSure: unknown = 4;

notSure = "Maybe string...";

notSure = false;

// Narrow `unknown` to something more specific by doing `typeof` cheks,
// comparison checks, etc.
declare const maybe: unknown;

// const aNumber: number = maybe; // ❌ Error

if (maybe === true) {
  // OK
  const aBoolean: boolean = maybe;

  // const aString: string = maybe; // ❌ Error;
}

if (maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;

  // So, it cannot be a boolean
  // const aBoolean: boolean = maybe; // ❌ Error
}

/**
 *
 * Any
 *
 */
declare function getValue(key: string): any;

// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

let looselyTyped: any = 4;

looselyTyped.ifItExists();
looselyTyped.toFixed();

let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); // ❌ Errpr

// Any will continue to propagate through your objects:
let looselyTyped2: any = {};

let d = looselyTyped2.a.b.c.d;
//  ^ = let d: any

/**
 *
 * Void
 *
 */
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
unusable = null; // ❌ Error
// Only OK if `--strictNullChecks` is not given

/**
 *
 * Null and Undefined
 *
 */

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

/**
 *
 * Null and Undefined
 *
 */

// Examples

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

/**
 *
 * Objects
 *
 */
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

// Errors:
create(undefined); // ❌ Error if `strictNullChecks` is set to `true`
// create(42);       // ❌ Error
// create("string"); // ❌ Error
// create(false);    // ❌ Error

/**
 *
 * Type assertions
 *
 */

// Type assertions have two forms

// as-syntax
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;

// "angle-bracket" syntax
let someValue2: unknown = "this is a string";

let strLength2: number = (<string>someValue2).length;

// ❗❗❗ IMPORTANT ❗❗❗

// When using TypeScript with JSX only "as-style" asseertions are allowed.

/**
 *
 * About Number, String, Boolean, Symbol and Object
 *
 * It can be tempting to think that the types Number, String, Boolean, Symbol, or
 * Object are the same as the lowercase versions recommended above. These types do
 * not refer to the language primitives however, and almost never should be used as
 * a type.
 *
 */

// Don't do this
function reverse(s: String): String {
  return s.split("").reverse().join("");
}
reverse("hello world");

// Instead, use the types number, string, boolean, object and symbol.
function reverse2(s: string): string {
  return s.split("").reverse().join("");
}
reverse2("hello world");
