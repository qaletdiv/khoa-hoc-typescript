interface Book {
    readonly isbn: string;
    title: string;
    author: string;
    publicationYear: number;
    genre?: string;
    pages?: number;
}

// Tạo một đối tượng myBook
let myBook: Book = {
    isbn: "978-0321765723",
    title: "Effective TypeScript",
    author: "Dan Vanderkam",
    publicationYear: 2019,
    genre: "Programming",
    pages: 304
};

console.log("My Book:", myBook);

// Thử gán lại giá trị cho isbn của myBook
// myBook.isbn = "new-isbn-123";
// Giải thích lỗi:
// Lỗi: Cannot assign to 'isbn' because it is a read-only property.
// Thuộc tính 'isbn' được định nghĩa là 'readonly', có nghĩa là nó chỉ có thể được gán giá trị
// khi đối tượng được khởi tạo lần đầu và không thể thay đổi sau đó.

// Tạo một đối tượng anotherBook nhưng cố tình bỏ qua thuộc tính title
// let anotherBook: Book = {
//     isbn: "978-1234567890",
//     author: "Jane Doe",
//     publicationYear: 2023
// };
// Giải thích lỗi:
// Lỗi: Property 'title' is missing in type '{ isbn: string; author: string; publicationYear: number; }'
// but required in type 'Book'.
// Thuộc tính 'title' là bắt buộc trong interface Book, nhưng không được cung cấp cho 'anotherBook'.