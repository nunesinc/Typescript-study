function greeter(fn: (a: string) => void) {
  fn("Hello, World Modern")
}
 
function printToConsole(s: string) {
  console.log(s)
}
 
greeter(printToConsole)