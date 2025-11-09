// Phân rã Array với Khai báo kiểu
let coordinates: [number, number] = [10, 20];
let [x, y]: [number, number] = coordinates;
console.log(x, y); // Output: 10 20

// Phân rã Object với Khai báo kiểu
let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};

let { firstName, age }: { firstName: string; age: number } = person;
console.log(firstName, age); // Output: Alice 30

// Phân rã với thuộc tính được đổi tên
let { firstName: fName, lastName: lName }: {firstName: string, lastName: string} = person;
console.log(fName, lName);

// TypeScript tự suy luận: age là number
// let { age } = person;

// Phân rã trong tham số hàm
function printUser({ name, email }: { name: string; email: string }) {
    console.log(`User Name: ${name}, Email: ${email}`);
}

printUser({ name: "Bob", email: "bob@example.com" });