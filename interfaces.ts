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
