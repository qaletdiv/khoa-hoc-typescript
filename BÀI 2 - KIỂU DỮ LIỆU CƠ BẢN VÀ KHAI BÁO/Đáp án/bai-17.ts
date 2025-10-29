// Khai báo mảng tọa độ gồm 2 phần tử số
let point: [number, number] = [10, 20];

// Dùng destructuring để lấy ra x và y, có khai báo kiểu cho cặp [x, y]
let [x, y]: [number, number] = point;

// In ra kết quả
console.log(`Tọa độ: (${x}, ${y})`);
