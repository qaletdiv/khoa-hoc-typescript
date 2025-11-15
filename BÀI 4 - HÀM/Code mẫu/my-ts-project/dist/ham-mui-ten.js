"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm mũi tên cơ bản
const multiply = (a, b) => {
    return a * b;
};
// Hàm mũi tên với thân hàm ngắn (implicit return)
const subtract = (a, b) => a - b;
// Hàm mũi tên không tham số
const sayHello = () => "Hello TypeScript!";
// Hàm mũi tên với tham số tùy chọn và mặc định
const greetUser = (name = "Guest", greeting) => {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hi, ${name}!`;
};
console.log(multiply(4, 2)); // Output: 8
console.log(subtract(10, 3)); // Output: 7
console.log(sayHello()); // Output: Hello TypeScript!
console.log(greetUser()); // Output: Hi, Guest!
console.log(greetUser("Alice", "Good morning")); // Output: Good morning, Alice!
