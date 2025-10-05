// 2.1 any

// Biến được khai báo rõ ràng kiểu 'any'
let looselyTyped: any = 4;
looselyTyped = "có thể là một chuỗi";
looselyTyped = false;

// So sánh với biến không khai báo kiểu rõ ràng
let inferredAny = 4; // TypeScript sẽ suy luận kiểu là 'number'
// inferredAny = "có thể là một chuỗi"; // Lỗi: Kiểu 'string' không thể gán cho kiểu 'number'.

let list: any[] = [1, true, "free"];
list[1] = 100;

// ---------------------------------------------------------------

//2.2 unknown
let value: unknown;

value = "hello";
value = 123;
value = [1, 2, 3];

// Lỗi: Object is of type 'unknown'.
// value.toFixed();
// value.length;

// Phải kiểm tra kiểu trước khi sử dụng
if (typeof value === "string") {
    console.log(value.length); // OK, bây giờ 'value' được biết là string
}

if (typeof value === "number") {
    console.log(value.toFixed(2)); // OK, bây giờ 'value' được biết là number
}

// ---------------------------------------------------------------

//2.3 void
function warnUser(): void {
    console.log("Đây là một thông báo cảnh báo");
    // return undefined; // Có thể trả về undefined, nhưng không bắt buộc
}

let unusable: void = undefined;
// unusable = 1; // Lỗi: Kiểu 'number' không thể gán cho kiểu 'void'.

// ---------------------------------------------------------------

//2.4 null & undefined

// Trong tsconfig.json, nếu strict: false
let myString: string = null;      // OK
let myNumber: number = undefined; // OK
console.log(myString); // Kết quả: null
console.log(myNumber); // Kết quả: undefined

// Với strict: true 
let u: undefined = undefined;
let n: null = null;

// let myString: string = null;      // ❌ Lỗi: Giá trị 'null' không thể gán cho biến có kiểu 'string'.
// let myNumber: number = undefined; // ❌ Lỗi: Giá trị 'undefined' không thể gán cho biến có kiểu 'number'.

let canBeStringOrNull: string | null = "Xin chào";
canBeStringOrNull = null; // OK
canBeStringOrNull = "Thế giới"; // OK
// canBeStringOrNull = undefined; // Lỗi: Kiểu 'undefined' không thể gán cho kiểu 'string | null'.

let canBeNumberOrUndefined: number | undefined = 10;
canBeNumberOrUndefined = undefined; // OK
canBeNumberOrUndefined = 20; // OK
// canBeNumberOrUndefined = null; // Lỗi: Kiểu 'null' không thể gán cho kiểu 'number | undefined'.

// ---------------------------------------------------------------

//2.5 never
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // Hàm này không bao giờ trả về
    }
}