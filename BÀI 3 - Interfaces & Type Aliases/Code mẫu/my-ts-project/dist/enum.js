"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2.2 Numeric Enums (Enum số)
// 1. Enum số mặc định (bắt đầu từ 0)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let playerDirection = Direction.Up;
console.log(playerDirection); // Output: 0
console.log(Direction.Right); // Output: 3
// 2. Enum số với giá trị khởi tạo
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
})(HttpStatus || (HttpStatus = {}));
let status = HttpStatus.NotFound;
console.log(status); // Output: 404
console.log(HttpStatus.Unauthorized); // Output: 401
// 2.3 String Enums (Enum chuỗi)
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
let currentUserRole = UserRole.Admin;
console.log(currentUserRole); // Output: ADMIN
function checkAccess(role) {
    if (role === UserRole.Admin) {
        console.log("Full access");
    }
    else if (role === UserRole.Editor) {
        console.log("Edit access");
    }
    else {
        console.log("View only");
    }
}
checkAccess(UserRole.Viewer);
//2.4 Const Enums (Enum hằng số)
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR"; // 3
})(LogLevel || (LogLevel = {}));
// console.log(LogLevel); // Báo lỗi
