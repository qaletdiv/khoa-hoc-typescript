// Tạo một type alias DataValue
type DataValue = string | number | boolean;

// Tạo một interface Setting
interface Setting {
    key: string;
    value: DataValue;
    description?: string;
}

// Tạo các đối tượng setting
let setting1: Setting = {
    key: "appName",
    value: "My App",
    description: "Name of the application"
};
console.log("Setting 1:", setting1);

let setting2: Setting = {
    key: "version",
    value: 1.0
};
console.log("Setting 2:", setting2);

let setting3: Setting = {
    key: "debugMode",
    value: true,
    description: "Enable debug logging"
};
console.log("Setting 3:", setting3);

// Thử gán setting1.value = { error: true };
// setting1.value = { error: true };
// Lỗi: Type '{ error: boolean; }' is not assignable to type 'DataValue'.
// Type '{ error: boolean; }' is not assignable to type 'boolean'.
// Thuộc tính 'error' không tồn tại trong type 'boolean'.
// Giá trị gán '{ error: true }' là một đối tượng, không phải là 'string', 'number' hay 'boolean'.
// Do đó, nó không tương thích với 'DataValue'.