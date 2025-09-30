"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuple: [string, number]
let rgbColor = [255, 0, 128];
let userProfile = ["John Doe", 30];
// Lỗi nếu sai thứ tự kiểu hoặc số lượng phần tử
// let wrongOrder: [string, number] = [30, "John Doe"]; // Error
// let tooMany: [string, number] = ["Jane Doe", 25, true]; // Error
// let tooFew: [string, number] = ["Peter"]; // Error
// Tuple trong các trường hợp thực tế (ví dụ: trả về nhiều giá trị từ một hàm)
function getUserStatus(id) {
    if (id === 1) {
        return ["Active", true];
    }
    return ["Inactive", false];
}
let [statusMessage, isActiveUser] = getUserStatus(1);
console.log(statusMessage, isActiveUser); // Output: Active trues
