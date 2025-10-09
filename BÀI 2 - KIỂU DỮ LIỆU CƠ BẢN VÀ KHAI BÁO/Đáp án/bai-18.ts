function displayUserDetails({ firstName, lastName, email }: { firstName: string; lastName: string; email: string }): void {
    console.log(`Full Name: ${firstName} ${lastName}, Email: ${email}`);
}

// Gọi hàm với một đối tượng người dùng mẫu
const user = {
    firstName: "Nguyễn",
    lastName: "Thị B",
    email: "nguyenthib@example.com"
};

displayUserDetails(user);
// Output: Full Name: Nguyễn Thị B, Email: nguyenthib@example.com