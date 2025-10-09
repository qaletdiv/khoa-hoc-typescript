function processInput(input: unknown): void {
    if (typeof input === "string") {
        console.log(`Độ dài chuỗi: ${input.length}`);
    } else if (typeof input === "number") {
        console.log(`Giá trị nhân đôi: ${input * 2}`);
    } else {
        console.log("Kiểu dữ liệu không được hỗ trợ.");
    }
}

// Gọi hàm để kiểm tra
processInput("Hello TypeScript"); // Output: Độ dài chuỗi: 16
processInput(123);               // Output: Giá trị nhân đôi: 246
processInput(true);              // Output: Kiểu dữ liệu không được hỗ trợ.
processInput(null);              // Output: Kiểu dữ liệu không được hỗ trợ.