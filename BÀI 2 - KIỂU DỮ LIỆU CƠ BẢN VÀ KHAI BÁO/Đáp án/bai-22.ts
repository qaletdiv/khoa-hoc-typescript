let data: unknown;

// Trường hợp 1: số
data = 50;
if (typeof data === "number") {
  console.log("Kết quả nhân đôi:", data * 2);
} else if (typeof data === "string") {
  console.log("Chuỗi in hoa:", data.toUpperCase());
} else {
  console.log("Không thể xử lý kiểu dữ liệu này");
}

// Trường hợp 2: chuỗi
data = "TypeScript";
if (typeof data === "number") {
  console.log("Kết quả nhân đôi:", data * 2);
} else if (typeof data === "string") {
  console.log("Chuỗi in hoa:", data.toUpperCase());
} else {
  console.log("Không thể xử lý kiểu dữ liệu này");
}

// Trường hợp 3: boolean
data = false;
if (typeof data === "number") {
  console.log("Kết quả nhân đôi:", data * 2);
} else if (typeof data === "string") {
  console.log("Chuỗi in hoa:", data.toUpperCase());
} else {
  console.log("Không thể xử lý kiểu dữ liệu này");
}
