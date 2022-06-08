//Narrowing 
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
console.log(padLeft(1,"a"))
console.log(padLeft("b","a"))
//padLeft(1,"a")