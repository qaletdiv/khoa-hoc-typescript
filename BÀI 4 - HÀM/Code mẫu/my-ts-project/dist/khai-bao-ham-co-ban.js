"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm cộng hai số
function add(a, b) {
    return a + b;
}
// Hàm chào mừng
function greet(name) {
    return `Hello, ${name}!`;
}
// Hàm không trả về gì (void)
function logMessage(message) {
    console.log(message);
}
// Sử dụng hàm
console.log(add(5, 3)); // Output: 8
console.log(greet("Alice")); // Output: Hello, Alice!
logMessage("This is a log message."); // Output: This is a log message.
// Lỗi biên dịch nếu truyền sai kiểu
// add("hello", 3); // Argument of type 'string' is not assignable to parameter of type 'number'.
