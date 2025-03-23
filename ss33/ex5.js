const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://thienthanhcomputer.com/wp-content/uploads/2024/06/s-l1600-7.webp',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://genk.mediacdn.vn/zoom/700_438/139269124445442048/2024/11/11/70708264152136645631-17312450477951143716490-165-0-1065-1440-crop-173124507437540501606-1731289475236-1731289477372329670182-0-0-477-764-crop-17312895335171791184342.jpeg',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 29990000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfztp9gi8HcWT_vgyetwILsL6AFehxIP2GLh054cdOE2u19WHj',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 8990000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF70Pfu4XTFqVvg6G9EU_deGngEHu8mY17_3KUnYxH3EgrKyMB',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://news.khangz.com/wp-content/uploads/2023/09/apple-watch-series-9-gia-bao-nhieu-1.jpg',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://down-vn.img.susercontent.com/file/c6b02ab9ae6cac644b4577ac9760940f',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];

function displayProducts(productArray) {
    let productList = document.getElementById('productList');
    productList.innerHTML = "";

    productArray.forEach(product => {
        let productCard = `
            <div class="boxCard col-md-2 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="text-danger"><b>${product.price.toLocaleString()} VNĐ</b></p>
                        <button class="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

function searchProducts() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );

    displayProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});
