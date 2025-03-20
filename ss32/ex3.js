document.getElementById("addSubjectBtn").addEventListener("click", function() {
    let inputField = document.getElementById("subjectInput");
    let subjectName = inputField.value.trim();

    if (subjectName === "") {
        alert("Tên môn học không được để trống!");
        return;
    }

    let subjectList = document.getElementById("subjectList");
    let newItem = document.createElement("li");
    newItem.textContent = subjectName;
    subjectList.appendChild(newItem);

    inputField.value = "";
});
