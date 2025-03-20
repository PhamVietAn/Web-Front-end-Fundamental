let employees = [
    { 
        id: 1, 
        name: 'John', 
        age: 18, 
        address: 'New York' 
    },
    { 
        id: 2, 
        name: 'Mike', 
        age: 22, 
        address: 'Canada' 
    },
    { 
        id: 3, 
        name: 'Linda', 
        age: 19, 
        address: 'California' 
    },
    { 
        id: 4, 
        name: 'Peter', 
        age: 25, 
        address: 'London' 
    },
    { 
        id: 5, 
        name: 'Tony', 
        age: 17, 
        address: 'New York' 
    }
];

let table = document.querySelector('#list tbody');

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    let row = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.textContent = i + 1;
    row.appendChild(cell1);

    let cell2 = document.createElement('td');
    cell2.textContent = employee.name;
    row.appendChild(cell2);

    let cell3 = document.createElement('td');
    cell3.textContent = employee.age;
    row.appendChild(cell3);

    let cell4 = document.createElement('td');
    cell4.textContent = employee.address;
    row.appendChild(cell4);

    table.appendChild(row);
}