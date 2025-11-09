const numbers: number[] = [5, 10, 15, 20, 25];

// Destructuring ra first, second, rest
const [first, second, ...rest] = numbers;

// Tính tổng rest
const sumRest = rest.reduce((acc, num) => acc + num, 0);

console.log("First:", first);   // 5
console.log("Second:", second); // 10
console.log("Sum of rest:", sumRest); // 60
