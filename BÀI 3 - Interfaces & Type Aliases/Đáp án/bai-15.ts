// Định nghĩa type alias OrderStatus
type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

// Tạo interface Order
interface Order {
    orderId: string;
    customerName: string;
    status: OrderStatus;
    totalAmount: number;
    readonly lastUpdated: Date;
}

// Tạo đối tượng order1
let order1: Order = {
    orderId: "ORD001",
    customerName: "Alice Smith",
    status: "processing",
    totalAmount: 150.75,
    lastUpdated: new Date()
};
console.log("Order 1:", order1);

// Tạo đối tượng order2
let order2: Order = {
    orderId: "ORD002",
    customerName: "Bob Johnson",
    status: "delivered",
    totalAmount: 50.00,
    lastUpdated: new Date("2023-01-15T10:00:00Z") // Một ngày trong quá khứ
};
console.log("Order 2:", order2);

// Thử gán order1.status = "invalid"
// order1.status = "invalid";
// Lỗi: Type '"invalid"' is not assignable to type 'OrderStatus'.
// Giá trị "invalid" không nằm trong tập hợp các literal type đã định nghĩa cho OrderStatus.

// Thử gán order1.lastUpdated = new Date();
// order1.lastUpdated = new Date();
// Lỗi: Cannot assign to 'lastUpdated' because it is a read-only property.
// Thuộc tính 'lastUpdated' được định nghĩa là 'readonly', không thể thay đổi sau khi khởi tạo.