let user: {
    id: number;
    name: string;
    isAdmin: boolean;
    email?: string; // Thuộc tính tùy chọn (optional property)
} = {
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
let product: {
    name: string;
    price: number;
    details: {
        category: string;
        weight: number;
    };
} = {
    name: "Laptop",
    price: 1200,
    details: {
        category: "Electronics",
        weight: 1.5
    }
};