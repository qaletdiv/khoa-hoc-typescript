"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    id: 1,
    name: "Alice",
    isAdmin: false
};
// Gán lại với email
user = {
    id: 2,
    name: "Bob",
    isAdmin: true,
    email: "bob@example.com"
};
// Lỗi nếu thiếu thuộc tính bắt buộc
// let invalidUser: { id: number; name: string; isAdmin: boolean } = {
//     id: 3,
//     name: "Charlie"
// }; // Error: Property 'isAdmin' is missing
// Object lồng nhau
let product = {
    name: "Laptop",
    price: 1200,
    details: {
        category: "Electronics",
        weight: 1.5
    }
};
