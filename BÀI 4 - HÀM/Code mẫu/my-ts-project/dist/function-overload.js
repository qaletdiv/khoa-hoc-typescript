"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Chữ ký triển khai (Implementation Signature) - phải bao quát tất cả các chữ ký trên
function combine(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    if (typeof input1 === 'string' && typeof input2 === 'number') {
        return input1 + String(input2);
    }
    if (typeof input1 === 'number' && typeof input2 === 'string') {
        return String(input1) + input2;
    }
    if (typeof input1 === 'boolean' && typeof input2 === 'boolean') {
        return input1 && input2; // Ví dụ: trả về kết quả AND
    }
    // Trường hợp mặc định hoặc xử lý lỗi
    throw new Error("Invalid input types for combine function.");
}
// Sử dụng các overload
console.log(combine("Hello", "World")); // Output: HelloWorld (string)
console.log(combine(10, 20)); // Output: 30 (number)
console.log(combine("Age: ", 30)); // Output: Age: 30 (string)
console.log(combine(123, "px")); // Output: 123px (string)
console.log(combine(true, false)); // Output: false (boolean)
// Lỗi biên dịch nếu gọi không đúng chữ ký
// combine("hello", true); // No overload matches this call.
