// 2.1 Union Type - Kết Hợp Nhiều Kiểu
// 1. Biến có thể là string hoặc number
type StringOrNumber = string | number;

let id: StringOrNumber = 123;
id = "abc";
// id = true; // Lỗi: Type 'boolean' is not assignable to type 'StringOrNumber'.

// 2. Thuộc tính trong object có union type
interface Employee {
    id: number;
    status: "active" | "inactive" | "on-leave"; // Literal type union
    data: string | number | boolean;
}

let emp1: Employee = {
    id: 1,
    status: "active",
    data: "Some string data"
};

emp1.data = 123;
emp1.data = true;
// emp1.data = null; // Lỗi: Type 'null' is not assignable to type 'string | number | boolean'.

// 2.2 Literal Type - Giới Hạn Giá Trị Cố Định
// 1. Biến chỉ có thể nhận giá trị "hello"
type Greeting = "hello";
let message: Greeting = "hello";
// message = "world"; // Lỗi: Type '"world"' is not assignable to type '"hello"'.

// 2. Kết hợp với Union Type
type TrafficLightColor = "red" | "yellow" | "green";

let currentColor: TrafficLightColor = "red";
currentColor = "green";
// currentColor = "blue"; // Lỗi: Type '"blue"' is not assignable to type 'TrafficLightColor'.

// 3. Trong interface/type alias
interface ApiResponse {
    status: "success" | "error";
    data: any;
}

const successResponse: ApiResponse = { status: "success", data: { user: "Frank" } };
const errorResponse: ApiResponse = { status: "error", data: "Something went wrong" };

// 2.3 Intersection Type - Kết Hợp Nhiều Type
// 1. Định nghĩa hai interface cơ bản
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

// 2. Tạo một intersection type
type PersonWithDetails = HasName & HasAge;

let myPerson: PersonWithDetails = {
    name: "Grace",
    age: 30
};

// Lỗi: Thiếu 'age'
// let anotherPerson: PersonWithDetails = {
//     name: "Heidi"
// };

// 3. Kết hợp nhiều object type
interface Car {
    brand: string;
    model: string;
}

interface Electric {
    batteryCapacity: number;
    range: number;
}

type ElectricCar = Car & Electric;

let tesla: ElectricCar = {
    brand: "Tesla",
    model: "Model 3",
    batteryCapacity: 75,
    range: 500
};