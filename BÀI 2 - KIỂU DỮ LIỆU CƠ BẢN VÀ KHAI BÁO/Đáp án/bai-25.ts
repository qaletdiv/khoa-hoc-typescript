let apiResult: unknown = '{"success": true, "token": "abc123"}';

if (typeof apiResult === "string") {
  try {
    const parsed = JSON.parse(apiResult);

    // Kiểm tra xem parsed có phải là object và có thuộc tính token không
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "token" in parsed &&
      typeof (parsed as any).token === "string"
    ) {
      console.log(`Token hợp lệ: ${(parsed as any).token}`);
    } else {
      console.log("Không tìm thấy token trong dữ liệu JSON.");
    }
  } catch {
    console.log("Dữ liệu JSON không hợp lệ.");
  }
} else {
  console.log("Dữ liệu không phải là chuỗi JSON.");
}
