"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userId = 123;
let userName = "Eve";
let laptop = {
    id: 101,
    name: "Laptop Pro",
    price: 1200
};
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log(add(5, 3));
console.log(multiply(5, 3));
const myDog = { name: "Buddy", breed: "Golden Retriever" };
class Labrador {
    name;
    breed;
    constructor(name) {
        this.name = name;
        this.breed = "Labrador";
    }
}
const myDogType = { name: "Max", breed: "German Shepherd" };
const user = { id: 1, name: "John Doe" }; // Cả id và name đều có sẵn
console.log(user); // { id: 1, name: 'John Doe' }
// type UserAlias = { // Lỗi: Duplicate identifier 'UserAlias'.
//     name: string;
// };
