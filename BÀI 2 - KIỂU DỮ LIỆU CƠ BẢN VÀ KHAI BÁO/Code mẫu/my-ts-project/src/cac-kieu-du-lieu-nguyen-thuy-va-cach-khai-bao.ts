// -------------------------
// Kiểu dữ liệu chuỗi (string)
// -------------------------

// Khai báo kiểu tường minh: Khai báo rõ ràng biến greeting có kiểu string
let greeting: string = "Hello, TypeScript!";

// Suy luận kiểu: TypeScript tự suy luận appName là string vì giá trị khởi tạo là chuỗi
let appName = 'My Awesome App';

// -------------------------
// Kiểu dữ liệu số (number)
// -------------------------

// Khai báo kiểu tường minh: Biến age được khai báo rõ ràng có kiểu number
let age: number = 30;

// Suy luận kiểu: TypeScript tự suy luận price là number
let price = 99.99;

// -------------------------
// Kiểu dữ liệu boolean (true/false)
// -------------------------

// Khai báo kiểu tường minh: Biến isActive được khai báo rõ ràng có kiểu boolean
let isActive: boolean = true;

// v: TypeScript tự suy luận hasError là boolean
let hasError = false;

// -------------------------
// Khi cần Explicit Type Annotation rõ ràng hơn
// -------------------------

// Phải khai báo tường minh nếu không có giá trị khởi tạo ngay lập tức
let maybeString: string;
maybeString = "Hello"; // Sau đó mới gán giá trị

// Trong khai báo hàm, tham số và giá trị trả về thường nên có type annotation để rõ ràng và kiểm soát
function greet(name: string): string { // 'name' có kiểu string, hàm trả về string
    return "Hello, " + name;
}
