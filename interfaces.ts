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

  let myObj = { size: 10, label: 'Size 10 Object ' };

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

  let myObj = { size: 10, label: 'Size 10 Object ' };

  printLabel(myObj);
}
