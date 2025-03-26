let employees = JSON.parse(localStorage.getItem("employees")) || [];
let currentPage = 1;
const itemsPerPage = 3;

function saveToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

function renderEmployees(page) {
    const list = document.querySelector(".list");
    list.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const paginatedItems = employees.slice(start, start + itemsPerPage);

    paginatedItems.forEach((employee, index) => {
        const row = `<tr>
            <td>${start + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        </tr>`;
        list.innerHTML += row;
    });
}

document.querySelector("button").addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const position = document.getElementById("position").value.trim();

    if (name && position) {
        employees.push({ name, position });
        saveToLocalStorage();
        renderEmployees(currentPage);
        document.getElementById("nameInput").value = "";
        document.getElementById("position").value = "";
    }
});

const paginationButtons = document.querySelectorAll(".btn-outline-primary");
paginationButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0 && currentPage > 1) {
            currentPage--;
        } else if (index === paginationButtons.length - 1 && currentPage * itemsPerPage < employees.length) {
            currentPage++;
        } else if (index > 0 && index < paginationButtons.length - 1) {
            currentPage = index;
        }
        renderEmployees(currentPage);
    });
});

document.addEventListener("DOMContentLoaded", () => renderEmployees(currentPage));
