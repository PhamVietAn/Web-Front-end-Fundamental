document.addEventListener("DOMContentLoaded", function () {
    const bookmarksContainer = document.querySelector(".list");
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    function renderBookmarks() {
        bookmarksContainer.innerHTML = "";
        bookmarks.forEach((bookmark, index) => {
            const bookmarkElement = document.createElement("div");
            bookmarkElement.className = "elementBox p-3";
            bookmarkElement.innerHTML = `
                <div class="d-flex justify-content-end">
                    <button class="btnX btn" onclick="confirmDelete(${index})"><b>X</b></button>
                </div>
                <a href="${bookmark.url}" target="_blank" class="text-white text-decoration-none ">${bookmark.name}</a>
                
            `;
            bookmarksContainer.appendChild(bookmarkElement);
        });
    }

    window.addWeb = function () {
        const name = document.getElementById("web-name").value.trim();
        const url = document.getElementById("web-url").value.trim();
        if (name && url) {
            bookmarks.push({ name, url });
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
            renderBookmarks();
        }
    };

    window.confirmDelete = function (index) {
        deleteIndex = index;
        new bootstrap.Modal(document.getElementById("deleteModal")).show();
    };

    window.deleteWeb = function () {
        if (deleteIndex !== null) {
            bookmarks.splice(deleteIndex, 1);
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
            renderBookmarks();
        }
    };

    renderBookmarks();
});
