// Tạo Tuple
let item: [string, number];

// Gán giá trị ["Book", 5]
item = ["Book", 5];
console.log(item); // ["Book", 5]

// Thử gán [10, "Pen"]
// item = [10, "Pen"]; // Lỗi: Type 'number' is not assignable to type 'string'. Type 'string' is not assignable to type 'number'.

// Giải thích: 
// TypeScript sẽ báo lỗi vì thứ tự và kiểu dữ liệu của các phần tử trong Tuple không khớp với định nghĩa [string, number]. 
// Ở đây, 10 (number) không thể gán cho vị trí của string và "Pen" (string) không thể gán cho vị trí của number.



// Thử gán ["Eraser"]
// item = ["Eraser"]; // Lỗi: Source has 1 element(s) but target requires 2.

// Giải thích: TypeScript sẽ báo lỗi vì số lượng phần tử trong mảng gán không khớp với độ dài cố định của Tuple (2 phần tử).