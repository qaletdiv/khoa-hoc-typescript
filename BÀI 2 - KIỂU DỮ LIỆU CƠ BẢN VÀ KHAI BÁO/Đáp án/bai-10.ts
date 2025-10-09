let employee: {
    id: number;
    name: string;
    department: string;
    phone?: string; // Thuộc tính tùy chọn
    address: {
        street: string;
        city: string;
    };
} = {
    id: 101,
    name: "Trần Văn B",
    department: "Marketing",
    address: {
        street: "123 Đường ABC",
        city: "Hà Nội"
    }
    // Thuộc tính 'phone' được bỏ qua vì nó là tùy chọn
};

console.log(employee);