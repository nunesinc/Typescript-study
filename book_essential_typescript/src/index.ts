//console.clear();
//console.log("Nunes");
/*
import { TodoItem } from "./todoItem"
import { TodoCollection } from "./todoCollection"
let todos = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
]
let collection = new TodoCollection("Adam", todos)
console.clear()
console.log(`${collection.userName}'s Todo List`)
let newId = collection.addTodo("Go for run")
let todoItem = collection.getTodoById(newId)
//console.log(JSON.stringify(todoItem))
todoItem.printDetails();
collection.addTodo(todoItem);
*/
import { TodoItem } from "./todoItem"
import { TodoCollection } from "./todoCollection"
let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
]

let collection: TodoCollection = new TodoCollection("Adam", todos)
//console.clear()
console.log(`${collection.userName}'s Todo List`)

let newId: number = collection.addTodo("Go for run")
let todoItem: TodoItem |undefined = collection.getTodoById(newId)
todoItem?.printDetails()
//.printDetails()
//collection.addTodo(todoItem);
