// Ví dụ với cú pháp 'as'
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
console.log(typeof strLength); // Output: 'number'
console.log(typeof someValue); // Output: 'string' -> Không làm thay đổi kiểu dữ liệu gốc của biến

// Ví dụ với cú pháp angle-bracket (không khuyến khích trong JSX)
let anotherValue: unknown = '42';
let numValue: number = (<number>anotherValue) * 2;
console.log(typeof numValue); // Output: 'number'
console.log(typeof anotherValue) // Output: 'string' -> Không làm thay đổi kiểu dữ liệu gốc của biến