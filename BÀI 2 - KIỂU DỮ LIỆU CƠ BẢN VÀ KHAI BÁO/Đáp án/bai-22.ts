// Giả định tsconfig.json có "strict": true
let data: string | null = "Hello";
data = undefined; // Lỗi: Type 'undefined' is not assignable to type 'string | null'.
                  // Giải thích: Với strict: true, 'undefined' không thể gán cho kiểu 'string | null' trừ khi nó được khai báo rõ ràng trong kiểu kết hợp.

function fetchData(): void {
    // Hàm này không trả về giá trị gì.
}

let result: void = fetchData(); // OK, kiểu trả về của fetchData là void.
let something: void = null;     // Lỗi: Type 'null' is not assignable to type 'void'.
                                // Giải thích: Với strict: true, biến kiểu 'void' chỉ có thể gán 'undefined', không phải 'null'.

// Để dòng data = undefined; không báo lỗi:
// Bạn cần thay đổi kiểu của data để bao gồm undefined trong kiểu kết hợp:

// let data: string | null | undefined = "Hello";
// data = undefined; // OK
// console.log(data);