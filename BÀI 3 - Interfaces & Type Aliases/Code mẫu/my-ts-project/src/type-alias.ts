// 2.1 type alias là gì?
// 1. Alias cho kiểu nguyên thủy
type ID = number;
type Name = string;

let userId: ID = 123;
let userName: Name = "Eve";

// 2. Alias cho một object shape (tương tự interface)
type Product = {
    id: ID;
    name: Name;
    price: number;
    description?: string;
};

let laptop: Product = {
    id: 101,
    name: "Laptop Pro",
    price: 1200
};

// 3. Alias cho một function signature
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(5, 3));
console.log(multiply(5, 3));

//2.2 So sánh interface và type alias
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = { name: "Buddy", breed: "Golden Retriever" };

class Labrador implements Dog {
    name: string;
    breed: string;
    constructor(name: string) {
        this.name = name;
        this.breed = "Labrador";
    }
}

type AnimalType = {
    name: string;
};

type DogType = AnimalType & {
    breed: string;
};

const myDogType: DogType = { name: "Max", breed: "German Shepherd" };

interface User {
    id: number;
}

// Khai báo lại User interface
interface User {
    name: string;
}

const user: User = { id: 1, name: "John Doe" }; // Cả id và name đều có sẵn
console.log(user); // { id: 1, name: 'John Doe' }

type UserAlias = {
    id: number;
};

// type UserAlias = { // Lỗi: Duplicate identifier 'UserAlias'.
//     name: string;
// };