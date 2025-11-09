// 2.2 Numeric Enums (Enum số)
// 1. Enum số mặc định (bắt đầu từ 0)
enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

let playerDirection: Direction = Direction.Up;
console.log(playerDirection); // Output: 0
console.log(Direction.Right); // Output: 3

// 2. Enum số với giá trị khởi tạo
enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized, // Sẽ tự động là 401
    NotFound = 404
}

let status: HttpStatus = HttpStatus.NotFound;
console.log(status); // Output: 404
console.log(HttpStatus.Unauthorized); // Output: 401

// 2.3 String Enums (Enum chuỗi)
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

let currentUserRole: UserRole = UserRole.Admin;
console.log(currentUserRole); // Output: ADMIN

function checkAccess(role: UserRole) {
    if (role === UserRole.Admin) {
        console.log("Full access");
    } else if (role === UserRole.Editor) {
        console.log("Edit access");
    } else {
        console.log("View only");
    }
}
checkAccess(UserRole.Viewer);

//2.4 Const Enums (Enum hằng số)
const enum LogLevel {
    DEBUG, // 0
    INFO,  // 1
    WARN,  // 2
    ERROR  // 3
}

// console.log(LogLevel); // Báo lỗi