// Khai báo đối tượng book
let book = {
    title: "The Great Adventure",
    author: "Jane Doe",
    pages: 350 // Thêm một thuộc tính không cần dùng để minh họa việc chỉ trích xuất
};

// Viết hàm printBookDetails sử dụng Destructuring trong tham số
function printBookDetails({ title, author }: { title: string; author: string }) {
    console.log(`Book Title: ${title}, Author: ${author}`);
}

// Gọi hàm
printBookDetails(book);
// Expected Output: Book Title: The Great Adventure, Author: Jane Doe