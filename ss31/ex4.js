let openModalBtn = document.getElementById('openModal');
let closeModalBtn = document.getElementById('closeModal');
let modalOverlay = document.getElementById('modalOverlay');
openModalBtn.onclick = function () {
    modalOverlay.style.display = 'flex';
}
closeModalBtn.onclick = function () {
    modalOverlay.style.display = 'none';
}