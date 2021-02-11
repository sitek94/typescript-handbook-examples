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

///////////////////////////////////////////////////////
// Optional and Default Parameters
///////////////////////////////////////////////////////
{
  function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
  }

  // let result1 = buildName("Bob"); // ❌ error, too few parameters
  // let result2 = buildName("Bob", "Adams", "Sr."); // ❌ error, too many parameters
  let result3 = buildName("Bob", "Adams"); // ah, just right
}

{
  function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    return firstName;
  }
  let result1 = buildName("Bob"); // works correctly now
  // let result2 = buildName("Bob", "Adams", "Sr."); // ❌ error, too many parameters
  let result3 = buildName("Bob", "Adams"); // ah, just right
}

{
  function buildName(firstName: string, lastName = "Smith") {
    if (lastName) return firstName + " " + lastName;
  }
  let result1 = buildName("Bob"); // works correctly now
  let result2 = buildName("Bob", undefined); // works correctly now
  // let result3 = buildName("Bob", "Adams", "Sr."); // ❌ error, too many parameters
  let result4 = buildName("Bob", "Adams"); // ah, just right
}

{
  function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
  }

  // let result1 = buildName("Bob"); // ❌ error, too few parameters
  // let result2 = buildName("Bob", "Adams", "Sr."); // ❌ error, too many parameters
  let result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
  let result4 = buildName(undefined, "Adams"); // okay and returns "Will Adams"
}

///////////////////////////////////////////////////////
// Rest Parameters
///////////////////////////////////////////////////////
{
  function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

  let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
}
