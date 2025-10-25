function handleApiResponse(response: unknown): void {
    if (typeof response === "string") {
        // Nếu là chuỗi, coi là thông báo lỗi
        console.log(`API Error: ${response}`);
    } else if (response === null || typeof response === "undefined") {
        // Nếu là null hoặc undefined
        console.log("No API response received.");
    } else if (
        typeof response === "object" &&
        response !== null && // Đảm bảo không phải null khi typeof là "object"
        "status" in response &&
        typeof (response as { status: unknown }).status === "number" &&
        "data" in response &&
        typeof (response as { data: unknown }).data === "string"
    ) {
        // Nếu là đối tượng có thuộc tính status là number và data là string
        const apiResponse = response as { status: number; data: string };
        console.log(`API Data (Status: ${apiResponse.status}): ${apiResponse.data}`);
    } else {
        // Các trường hợp còn lại
        console.log("Unexpected API response format.");
    }
}

// Ví dụ gọi hàm:
handleApiResponse("Server timed out.");
// Output: API Error: Server timed out.

handleApiResponse({ status: 200, data: "User list loaded." });
// Output: API Data (Status: 200): User list loaded.

handleApiResponse(null);
// Output: No API response received.

handleApiResponse(undefined);
// Output: No API response received.

handleApiResponse(123);
// Output: Unexpected API response format.

handleApiResponse({ error: "Something went wrong" }); // Đối tượng không khớp cấu trúc
// Output: Unexpected API response format.