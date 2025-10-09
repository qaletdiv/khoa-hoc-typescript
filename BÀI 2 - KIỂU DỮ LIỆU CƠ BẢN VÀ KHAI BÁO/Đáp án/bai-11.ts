interface Product {
    name: string;
    price: number;
    category?: {
        id: number;
        name: string;
    };
}

function printProductInfo(product: Product): void {
    console.log(`Tên sản phẩm: ${product.name}`);
    console.log(`Giá: ${product.price} VNĐ`);
    if (product.category) {
        console.log(`Danh mục: ${product.category.name} (ID: ${product.category.id})`);
    } else {
        console.log("Không có thông tin danh mục.");
    }
    console.log("---");
}

// Gọi hàm với sản phẩm có danh mục
let productWithCategory: Product = {
    name: "Smartphone X",
    price: 15000000,
    category: {
        id: 1,
        name: "Điện thoại"
    }
};
printProductInfo(productWithCategory);

// Gọi hàm với sản phẩm không có danh mục
let productWithoutCategory: Product = {
    name: "Sạc dự phòng",
    price: 500000
};
printProductInfo(productWithoutCategory);