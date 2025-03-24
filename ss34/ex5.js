document.addEventListener("DOMContentLoaded", loadEmployees);

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();

    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push({ name, position });

    localStorage.setItem("employees", JSON.stringify(employees));
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";

    loadEmployees();
}

function loadEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let tableBody = document.getElementById("employeeTable");

    tableBody.innerHTML = "";
    employees.forEach((employee, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

