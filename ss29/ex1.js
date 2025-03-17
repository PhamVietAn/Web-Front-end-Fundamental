let contacts = []

let addContact = function() {
    let id = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1
    let name = prompt("Nhập tên liên hệ:")
    let email = prompt("Nhập email:")
    let phone = prompt("Nhập số điện thoại:")
    contacts.push({ id, name, email, phone })
    alert("Đã thêm liên hệ thành công!")
}

let showContacts = function() {
    let contactList = "Danh sách liên hệ:\n"
    contacts.forEach(contact => {
        contactList += `ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}\n`
    })
    alert(contactList)
}

let searchByPhone = function() {
    let phone = prompt("Nhập số điện thoại cần tìm:")
    let result = contacts.find(contact => contact.phone === phone)
    if (result) {
        alert(`Tìm thấy: ID: ${result.id}, Name: ${result.name}, Email: ${result.email}, Phone: ${result.phone}`)
    } else {
        alert("Không tìm thấy liên hệ!")
    }
}

let updateContact = function() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần cập nhật:"))
    let contact = contacts.find(c => c.id === id)
    if (contact) {
        contact.name = prompt("Nhập tên mới:") || contact.name
        contact.email = prompt("Nhập email mới:") || contact.email
        contact.phone = prompt("Nhập số điện thoại mới:") || contact.phone
        alert("Cập nhật thành công!")
    } else {
        alert("Không tìm thấy liên hệ!")
    }
}

let deleteContact = function() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần xóa:"))
    let index = contacts.findIndex(c => c.id === id)
    if (index !== -1) {
        contacts.splice(index, 1);
        alert("Đã xóa liên hệ thành công!")
    } else {
        alert("Không tìm thấy liên hệ!")
    }
}


let choice;
do {
    choice = +prompt(`Chọn chức năng:\n1. Thêm liên hệ\n2. Hiển thị danh bạ\n3. Tìm kiếm theo số điện thoại\n4. Cập nhật thông tin\n5. Xóa liên hệ\n6. Thoát`)
    switch (choice) {
        case 1:
            addContact()
            break
        case 2:
            showContacts()
            break
        case 3:
            searchByPhone()
            break
        case 4:
            updateContact()
            break
        case 5:
            deleteContact()
            break
        case 6:
            alert("Thoát chương trình!")
            break
        default:
            alert("Lựa chọn không hợp lệ!")
    }
} while (choice !== 6);

