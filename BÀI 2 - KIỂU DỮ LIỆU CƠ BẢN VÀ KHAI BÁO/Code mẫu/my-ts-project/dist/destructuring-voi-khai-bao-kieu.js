"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Phân rã Array với Khai báo kiểu
let coordinates = [10, 20];
let [x, y] = coordinates;
console.log(x, y); // Output: 10 20
// Phân rã Object với Khai báo kiểu
let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};
let { firstName, age } = person;
console.log(firstName, age); // Output: Alice 30
// Phân rã với thuộc tính được đổi tên
let { firstName: fName, lastName: lName } = person;
// fName và lName sẽ tự động suy luận kiểu là string
console.log(fName, lName); // Output: Alice Smith
// Phân rã trong tham số hàm
function printUser({ name, email }) {
    console.log(`User Name: ${name}, Email: ${email}`);
}
printUser({ name: "Bob", email: "bob@example.com" });
