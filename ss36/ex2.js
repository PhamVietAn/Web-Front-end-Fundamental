document.addEventListener("DOMContentLoaded", function () {
    const foodItems = [
        { id: "like1", name: "Bún đậu tương ớt" },
        { id: "like2", name: "Phở bò nhiều hành" },
        { id: "like3", name: "Cơm tấm Sài Gòn" }
    ];

    foodItems.forEach(item => {
        let likeCount = localStorage.getItem(item.id) || 0;
        document.getElementById(item.id).textContent = likeCount;
    });
});

function changeLike(itemId) {
    let currentLikes = parseInt(localStorage.getItem(itemId) || "0", 10);
    currentLikes++;
    localStorage.setItem(itemId, currentLikes);
    document.getElementById(itemId).textContent = currentLikes;
}
