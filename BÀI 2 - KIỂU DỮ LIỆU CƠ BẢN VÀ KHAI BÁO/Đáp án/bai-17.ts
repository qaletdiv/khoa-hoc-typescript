let student = {
    id: "ST001",
    name: "Lê Văn A",
    grade: "A",
    major: "IT"
};

// Trích xuất id và name với Type Annotation
let { id, name }: { id: string; name: string } = student;

// Trích xuất grade vào biến studentGrade với Type Annotation
let { grade: studentGrade }: { grade: string } = student;

console.log(`Mã sinh viên: ${id}`);           // Output: Mã sinh viên: ST001
console.log(`Tên sinh viên: ${name}`);         // Output: Tên sinh viên: Lê Văn A
console.log(`Điểm: ${studentGrade}`);         // Output: Điểm: A