// Khai báo mảng với kiểu dữ liệu trực tiếp
let people: { fullName: string; age: number }[] = [
    { fullName: "Nam", age: 20 },
    { fullName: "Lan", age: 21 }
];

// Dùng Array Destructuring để lấy phần tử đầu tiên
let [person1] = people;

// Dùng Object Destructuring để lấy fullName và age từ person1
let { fullName, age }: { fullName: string; age: number } = person1;

console.log(fullName, age);
// Kết quả: Nam 20
