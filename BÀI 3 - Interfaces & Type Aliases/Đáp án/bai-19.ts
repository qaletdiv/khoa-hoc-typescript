// Định nghĩa interface EmployeeBase
interface EmployeeBase {
    employeeId: string;
    firstName: string;
    lastName: string;
}

// Định nghĩa interface ContactInfo
interface ContactInfo {
    email: string;
    phone?: string;
}

// Định nghĩa interface DepartmentInfo
interface DepartmentInfo {
    departmentName: string;
    role: string;
    readonly hireDate: Date;
}

// Tạo type alias FullEmployeeDetails
type FullEmployeeDetails = EmployeeBase & ContactInfo & DepartmentInfo;

// Tạo một đối tượng johnDoe
let johnDoe: FullEmployeeDetails = {
    employeeId: "EMP001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    departmentName: "Engineering",
    role: "Software Engineer",
    hireDate: new Date()
};
console.log("John Doe:", johnDoe);

// Tạo một đối tượng janeSmith nhưng cố tình bỏ qua thuộc tính email
// let janeSmith: FullEmployeeDetails = {
//     employeeId: "EMP002",
//     firstName: "Jane",
//     lastName: "Smith",
//     // email: bị thiếu
//     departmentName: "HR",
//     role: "Recruiter",
//     hireDate: new Date("2022-03-01")
// };
// Lỗi: Property 'email' is missing in type '{ employeeId: string; firstName: string; lastName: string;
// departmentName: string; role: string; hireDate: Date; }' but required in type 'ContactInfo'.
// Giải thích lỗi: Thuộc tính 'email' là bắt buộc trong 'ContactInfo', và vì 'FullEmployeeDetails'
// là sự kết hợp của 'ContactInfo', nên nó cũng bắt buộc phải có 'email'.

// Thử gán lại giá trị cho johnDoe.hireDate
// johnDoe.hireDate = new Date("2023-01-01");
// Lỗi: Cannot assign to 'hireDate' because it is a read-only property.
// Giải thích lỗi: Thuộc tính 'hireDate' được định nghĩa là 'readonly' trong 'DepartmentInfo',
// do đó không thể thay đổi sau khi đối tượng được khởi tạo.