"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ví dụ với cú pháp 'as'
let someValue = "this is a string";
let strLength = someValue.length;
console.log(typeof strLength); // Output: 'number'
console.log(typeof someValue); // Output: 'string' -> Không làm thay đổi kiểu dữ liệu gốc của biến
// Ví dụ với cú pháp angle-bracket (không khuyến khích trong JSX)
let anotherValue = '42';
let numValue = anotherValue * 2;
console.log(typeof numValue); // Output: 'number'
console.log(typeof anotherValue); // Output: 'string' -> Không làm thay đổi kiểu dữ liệu gốc của biến
