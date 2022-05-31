//https://www.typescriptlang.org/docs/handbook/2/basic-types.html
//hello world 
let msg: string = "Hello World!"
console.log(msg)


//lower case
const announcement = "HellO World!";
console.log(announcement.toLocaleLowerCase())
console.log(announcement.toLocaleUpperCase())

//greet person
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());