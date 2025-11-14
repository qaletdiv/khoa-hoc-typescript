// Định nghĩa type alias Coordinates
type Coordinates = [number, number];

// Định nghĩa type alias UserInformation
type UserInformation = {
    id: number;
    name: string;
    location?: Coordinates;
    isActive: boolean;
};

// Tạo một đối tượng myUser
let myUser: UserInformation = {
    id: 1,
    name: "Alice",
    isActive: true,
    location: [34.0522, -118.2437] // Ví dụ tọa độ Los Angeles
};

console.log("My User:", myUser);

// Tạo một đối tượng anotherUser
let anotherUser: UserInformation = {
    id: 2,
    name: "Bob",
    isActive: false
    // Không có location
};

console.log("Another User:", anotherUser);

// Thử gán myUser.id = 123;
// myUser.id = "abc";
// Lỗi: Type 'string' is not assignable to type 'number'.
// Thuộc tính 'id' trong 'UserInformation' được định nghĩa là 'number', nên việc gán một chuỗi sẽ gây lỗi kiểu dữ liệu không khớp.