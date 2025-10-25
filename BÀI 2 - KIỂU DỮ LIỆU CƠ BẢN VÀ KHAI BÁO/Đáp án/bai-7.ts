function calculateSum(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Hoặc sử dụng reduce:
/*
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
*/

const myNumbers = [10, 20, 30, 40];
const totalSum = calculateSum(myNumbers);
console.log(`Tổng của mảng là: ${totalSum}`); // Output: Tổng của mảng là: 100