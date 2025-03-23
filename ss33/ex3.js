let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];

function filterProducts() {
    let selectedCategory = document.getElementById("category").value;
    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    let filteredProducts = dish.filter(item => item.category === selectedCategory || selectedCategory === "");

    filteredProducts.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}`;
        productList.appendChild(li);
    });
}