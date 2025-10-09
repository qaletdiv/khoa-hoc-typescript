// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Type Assertion Example</title>
// </head>
// <body>
//     <input type="text" id="my-input" value="Giá trị của input">
//     <script src="your-typescript-output.js"></script> <!-- Thay bằng file JS được compile từ TS -->
// </body>
// </html>

let element: unknown = document.getElementById("my-input");

// Kiểm tra trước khi ép kiểu (tốt nhất)
if (element instanceof HTMLInputElement) {
    const inputElement = element as HTMLInputElement;
    console.log(`Giá trị của input: ${inputElement.value}`);
} else {
    console.log("Element không phải là HTMLInputElement.");
}

// Hoặc ép kiểu trực tiếp nếu bạn chắc chắn
const inputElementDirect = element as HTMLInputElement;
console.log(`Giá trị của input (ép kiểu trực tiếp): ${inputElementDirect.value}`);