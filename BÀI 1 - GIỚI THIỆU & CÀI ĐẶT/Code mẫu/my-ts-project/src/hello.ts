// hello.ts
const message: string = "Hello, TypeScript!";
console.log(message);

function add(a: number, b: number): number {
    return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum);
// add("hello", 3); // Nếu uncomment dòng này, VS Code sẽ báo lỗi ngay lập tức