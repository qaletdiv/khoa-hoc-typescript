function fetchUserCoords(userId: number): [string, number, number] {
    // Giả lập dữ liệu người dùng
    if (userId === 1) {
        return ["Alice", 106.82, 10.76]; // TP.HCM
    }
    return ["Unknown", 0, 0];
}

// Gọi hàm và sử dụng destructuring
let [userName, longitude, latitude] = fetchUserCoords(1);

console.log(`Tên người dùng: ${userName}`);
console.log(`Kinh độ: ${longitude}`);
console.log(`Vĩ độ: ${latitude}`);

// Output:
// Tên người dùng: Alice
// Kinh độ: 106.82ac
// Vĩ độ: 10.76s