let fruits: [string, string, string] = ["apple", "banana", "cherry"];

// Phân rã mảng, bỏ qua phần tử giữa
let [firstFruit, , lastFruit]: [string, string, string] = fruits;

console.log(firstFruit, lastFruit);
// Kết quả: apple cherry
