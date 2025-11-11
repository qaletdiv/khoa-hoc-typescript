"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Sử dụng interface để khai báo biến và kiểm tra kiểu
let user1 = {
    id: 1,
    name: "Alice",
};
let user2 = {
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
class Person {
    name;
    constructor(n) {
        this.name = n;
    }
    greet(message) {
        console.log(`${message}, my name is ${this.name}`);
    }
}
let person1 = new Person("David");
person1.greet("Hello");
// 2. Sử dụng interface để khai báo biến và kiểm tra kiểu
let userA = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};
let userB = {
    id: 2,
    name: "Bob" // email là tùy chọn nên hợp lệ, không cần phải có
};
console.log(userA);
console.log(userB);
let p1 = { x: 10, y: 20 };
// p1.x = 5; // Lỗi: Cannot assign to 'x' because it is a read-only property.
