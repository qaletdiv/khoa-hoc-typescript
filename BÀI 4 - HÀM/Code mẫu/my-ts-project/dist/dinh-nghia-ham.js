"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addNumbers = (x, y) => x + y;
const subtractNumbers = (x, y) => x - y;
console.log(addNumbers(10, 5)); // Output: 15
console.log(subtractNumbers(10, 5)); // Output: 5
// Hàm nhận một hàm khác làm tham số (callback)
function executeOperation(op, num1, num2) {
    const result = op(num1, num2);
    console.log(`Result of operation: ${result}`);
}
executeOperation(addNumbers, 20, 10); // Output: Result of operation: 30
executeOperation(subtractNumbers, 20, 10); // Output: Result of operation: 10
const formatString = (text, casing) => {
    if (casing === "upper") {
        return text.toUpperCase();
    }
    return text.toLowerCase();
};
console.log(formatString("Hello TypeScript", "upper")); // Output: HELLO TYPESCRIPT
console.log(formatString("Hello TypeScript", "lower")); // Output: hello typescript
const processNumber = async (num) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Processed: ${num * 2}`), 300);
    });
};
processNumber(10).then(result => console.log(result)); // Output: Processed: 20s
