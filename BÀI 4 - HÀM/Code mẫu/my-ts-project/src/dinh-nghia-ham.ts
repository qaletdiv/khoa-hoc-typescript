// Sử dụng Type Alias để định nghĩa kiểu hàm
type MathOperation = (a: number, b: number) => number;

const addNumbers: MathOperation = (x, y) => x + y;
const subtractNumbers: MathOperation = (x, y) => x - y;

console.log(addNumbers(10, 5));     // Output: 15
console.log(subtractNumbers(10, 5)); // Output: 5

// Hàm nhận một hàm khác làm tham số (callback)
function executeOperation(op: MathOperation, num1: number, num2: number): void {
    const result = op(num1, num2);
    console.log(`Result of operation: ${result}`);
}

executeOperation(addNumbers, 20, 10); // Output: Result of operation: 30
executeOperation(subtractNumbers, 20, 10); // Output: Result of operation: 10

// Sử dụng Interface để định nghĩa kiểu hàm
interface StringFormatter {
    (text: string, casing: "upper" | "lower"): string;
}

const formatString: StringFormatter = (text, casing) => {
    if (casing === "upper") {
        return text.toUpperCase();
    }
    return text.toLowerCase();
};

console.log(formatString("Hello TypeScript", "upper")); // Output: HELLO TYPESCRIPT
console.log(formatString("Hello TypeScript", "lower")); // Output: hello typescript

// Ví dụ về một kiểu hàm phức tạp hơn
type AsyncProcessor<T, U> = (input: T) => Promise<U>;

const processNumber: AsyncProcessor<number, string> = async (num) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Processed: ${num * 2}`), 300);
    });
};

processNumber(10).then(result => console.log(result)); // Output: Processed: 20s