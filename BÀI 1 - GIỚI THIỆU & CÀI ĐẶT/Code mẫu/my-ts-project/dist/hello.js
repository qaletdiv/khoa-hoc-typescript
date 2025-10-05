"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// hello.ts
const message = "Hello, TypeScript!";
console.log(message);
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("Sum:", sum);
// add("hello", 3); // Nếu uncomment dòng này, VS Code sẽ báo lỗi ngay lập tức
