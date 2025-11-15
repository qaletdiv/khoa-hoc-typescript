"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm mô phỏng việc lấy dữ liệu từ API
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Item 1", "Item 2", "Item 3"]);
        }, 1000);
    });
}
// Hàm async lấy dữ liệu và trả về một mảng số
async function fetchNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([10, 20, 30]);
        }, 1500);
    });
}
// Hàm async sử dụng await
async function processData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(); // data sẽ có kiểu string[]
        console.log(`Data received: ${data.join(", ")}`);
        console.log("Fetching numbers...");
        const numbers = await fetchNumbers(); // numbers sẽ có kiểu number[]
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        console.log(`Sum of numbers: ${sum}`);
        return `Data processing complete. Total sum: ${sum}`;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error during data processing:", error.message);
            return `Data processing failed: ${error.message}`;
        }
        console.error("Unknown error:", error);
        return "Data processing failed due to an unknown error.";
    }
}
// Gọi hàm async
processData().then((result) => {
    console.log(result);
});
const getUserById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
        }, 500);
    });
};
getUserById(1).then(user => {
    console.log(`Fetched user: ${user.name}`);
});
