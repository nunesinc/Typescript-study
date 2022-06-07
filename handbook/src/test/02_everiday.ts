// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

//Parameter Type Annotations
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("Nunes")

//Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}
console.log(getFavoriteNumber())

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//Optional Properties
function printName(obj: { first: string; last?: string }) {
  console.log("First : " + obj.first)
  console.log("Last : " + obj.last)
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
printId(101)
printId("teste id")

// Type Aliases

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord1(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord1({ x: 100, y: 100 });


//INTERFACES
interface Point1 {
  x: number;
  y: number;
}
 
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord2({ x: 100, y: 100 });