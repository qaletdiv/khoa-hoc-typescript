let student: {
    id: number;
    name: string;
    age: number;
    isGraduated: boolean;
    email?: string; // Thuộc tính tùy chọn
    address: {
        city: string;
        country: string;
        postalCode?: string; // Thuộc tính tùy chọn
    };
    school: {
        name: string;
        yearFounded: number;
        department?: string; // Thuộc tính tùy chọn
    };
} = {
    id: 1001,
    name: "Nguyễn Văn A",
    age: 22,
    isGraduated: false,
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
        // postalCode được bỏ qua vì là tùy chọn
    },
    school: {
        name: "Đại học Bách Khoa Hà Nội",
        yearFounded: 1956
        // department được bỏ qua vì là tùy chọn
    }
    // email được bỏ qua vì là tùy chọn
};

// 1. In tên sinh viên và tuổi
console.log("Họ tên:", student.name);
console.log("Tuổi:", student.age);

// 2. In thành phố sinh viên đang sống
console.log("Thành phố:", student.address.city);

// 3. In tên trường và năm thành lập
console.log("Trường:", student.school.name);
console.log("Năm thành lập:", student.school.yearFounded);

// 4. Cập nhật trạng thái tốt nghiệp
student.isGraduated = true;

// 5. In lại toàn bộ đối tượng sau khi cập nhật
console.log("Thông tin sinh viên sau khi cập nhật:", student);
