// 2.1 interface là gì?
// 1. Định nghĩa một interface đơn giản cho đối tượng User
interface User {
    id: number;
    name: string;
}

// 2. Sử dụng interface để khai báo biến và kiểm tra kiểu
let user1: User = {
    id: 1,
    name: "Alice",
};

let user2: User = {
    id: 2,
    name: "Bob"
};

// Lỗi: Thiếu thuộc tính 'name'
// let user3: User = {
//     id: 3
// };

// Lỗi: Sai kiểu dữ liệu cho 'id'
// let user4: User = {
//     id: "4",
//     name: "Charlie"
// };

console.log(user1);
console.log(user2);

// 3. Interface với phương thức (method)
interface Greetable {
    name: string;
    greet(message: string): void;
}

class Person implements Greetable {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(message: string) {
        console.log(`${message}, my name is ${this.name}`);
    }
}

let person1 = new Person("David");
person1.greet("Hello");

// 2.2 Thuộc tính tùy chọn (optional properties)
// 1. Định nghĩa một interface với thuộc tính email là tùy chọn
interface UserWithOptionalEmail {
    id: number;
    name: string;
    email?: string; // Thuộc tính email là tùy chọn (optional)
}

// 2. Sử dụng interface để khai báo biến và kiểm tra kiểu
let userA: UserWithOptionalEmail = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

let userB: UserWithOptionalEmail = {
    id: 2,
    name: "Bob" // email là tùy chọn nên hợp lệ, không cần phải có
};

console.log(userA);
console.log(userB);

//Thuộc tính chỉ đọc (readonly properties)
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Lỗi: Cannot assign to 'x' because it is a read-only property.