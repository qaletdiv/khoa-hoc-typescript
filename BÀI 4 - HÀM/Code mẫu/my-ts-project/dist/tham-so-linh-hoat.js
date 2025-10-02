"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tham số tùy chọn
function buildName(firstName, lastName) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}
console.log(buildName("John")); // Output: John
console.log(buildName("Jane", "Doe")); // Output: Jane Doe
// Tham số mặc định
function calculateArea(length, width = 10) {
    return length * width;
}
console.log(calculateArea(5)); // Output: 50 (width mặc định là 10)
console.log(calculateArea(5, 20)); // Output: 100
// Tham số còn lại
function sumAll(message, ...numbers) {
    let total = numbers.reduce((acc, num) => acc + num, 0);
    return `${message} Total: ${total}`;
}
console.log(sumAll("Sum of numbers:", 1, 2, 3)); // Output: Sum of numbers: Total: 6
console.log(sumAll("Another sum:", 10, 20, 30, 40)); // Output: Another sum: Total: 100
console.log(sumAll("No numbers:")); // Output: No numbers: Total: 0
