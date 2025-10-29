let data: any = "12345";

// Ép kiểu thành string và gọi .charAt(0)
let charAtIndex0: string = (data as string).charAt(0);
console.log(`Ký tự đầu tiên: ${charAtIndex0}`); // Output: Ký tự đầu tiên: 1

// Ép kiểu thành number và thực hiện phép cộng
let resultAddition: number = (data as number) + 5;
console.log(`Kết quả phép cộng: ${resultAddition}`); // Output: Kết quả phép cộng: 123455


// Giải thích lý do tại sao phép cộng thứ hai có thể cho kết quả không mong muốn:

// Khi bạn ép kiểu data từ "12345" thành number bằng (data as number), TypeScript chỉ "tin tưởng" bạn rằng data là một số. Tuy nhiên, ở runtime (thời điểm JavaScript thực thi), 
// giá trị thực của data vẫn là chuỗi "12345".
// Trong JavaScript, khi bạn thực hiện phép cộng (+) giữa một chuỗi và một số, 

// JavaScript sẽ thực hiện **nối chuỗi (string concatenation)** thay vì phép cộng số học, trừ khi chuỗi đó có thể được chuyển đổi thành số một cách tường minh trước.

// Cụ thể:
// "12345" + 5 sẽ cho kết quả là "123455".

// Đây là một ví dụ điển hình về rủi ro của Type Assertion. Nó chỉ ảnh hưởng đến việc kiểm tra kiểu ở thời điểm biên dịch (compile-time) của TypeScript, 
// chứ không thay đổi kiểu dữ liệu thực tế** của biến ở thời điểm chạy (runtime) trong JavaScript. 
// Nếu bạn muốn thực sự chuyển đổi chuỗi thành số, bạn phải sử dụng các hàm chuyển đổi của JavaScript như Number() hoặc parseInt():

let actualNumber: number = Number(data) + 5;
console.log(`Kết quả phép cộng thực sự: ${actualNumber}`); // Output: Kết quả phép cộng thực sự: 12350