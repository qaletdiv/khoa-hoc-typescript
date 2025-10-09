let mixedData: (string | number)[] = ["Apple", 1, "Banana", 2];

// Thêm một phần tử "Orange"
mixedData.push("Orange");
console.log(mixedData); // ["Apple", 1, "Banana", 2, "Orange"]

// Thêm một phần tử 3
mixedData.push(3);
console.log(mixedData); // ["Apple", 1, "Banana", 2, "Orange", 3]

// Thử thêm một phần tử true
// mixedData.push(true); // Dòng này sẽ báo lỗi
// Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.