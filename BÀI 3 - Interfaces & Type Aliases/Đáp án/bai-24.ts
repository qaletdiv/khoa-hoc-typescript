// Định nghĩa String Enum TaskStatus
enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}

// Định nghĩa Numeric Enum Priority
enum Priority {
    Low,    // 0
    Medium, // 1
    High    // 2
}

// Định nghĩa Const Enum NotificationType
const enum NotificationType {
    Email = "Email",
    SMS = "SMS",
    Push = "Push"
}

// Tạo interface Task
interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    priority: Priority;
    dueDate?: Date;
    assignedTo?: string;
    notificationPreference: NotificationType;
}

// Tạo đối tượng myTask
let myTask: Task = {
    id: "T001",
    title: "Learn TypeScript",
    status: TaskStatus.IN_PROGRESS,
    priority: Priority.High,
    notificationPreference: NotificationType.Email
};
console.log("My Task:", myTask);

// Tạo đối tượng anotherTask
let anotherTask: Task = {
    id: "T002",
    title: "Refactor old code",
    status: TaskStatus.TODO,
    priority: Priority.Medium,
    dueDate: new Date("2024-12-31"),
    assignedTo: "John Doe",
    notificationPreference: NotificationType.Push
};
console.log("Another Task:", anotherTask);

// In ra myTask.status và anotherTask.priority
console.log("My Task Status:", myTask.status); // Output: IN_PROGRESS
console.log("Another Task Priority:", anotherTask.priority); // Output: 1

// Thử truy cập console.log(NotificationType)
// console.log(NotificationType);
// Lỗi: 'NotificationType' refers to a const enum, and cannot be accessed in runtime.
// Giải thích: Với `const enum`, TypeScript sẽ loại bỏ hoàn toàn đối tượng enum ở giai đoạn biên dịch
// và thay thế các tham chiếu đến các thành viên bằng giá trị literal của chúng.
// Do đó, không có đối tượng `NotificationType` nào tồn tại ở runtime để có thể truy cập toàn bộ.
// Bạn chỉ có thể truy cập các thành viên cụ thể như `NotificationType.Email`.