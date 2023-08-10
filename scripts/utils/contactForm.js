// Display Model
function displayModal() {
  const modal = document.getElementById("contactModal_background");
  modal.style.display = "block";
}

// close modal
function closeModal() {
  const modal = document.getElementById("contactModal_background");
  modal.style.display = "none";
  const modalConf = document.getElementById("bgroundConf");
  modalConf.style.display = "none";
}
