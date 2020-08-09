const modalTriggers = document.querySelectorAll(".modal-trigger");
modalTriggers.forEach((modalTrigger) => {
  modalTrigger.addEventListener("click", (clickEvent) => {
    var trigger = clickEvent.target;
    var modalId = trigger.getAttribute("data-modal-id");
    openModal(modalId);
  });
});

const openModal = (modalId) => {
  var modal = document.getElementById(modalId);
  modal.classList.add("visible");
};

document.body.addEventListener("keyup", (keyEvent) => {
  if (keyEvent.key === "Escape") {
    closeModal();
  }
});

window.onclick = function (event) {
  var modal = document.getElementsByClassName("modal visible")[0];
  if (event.target == modal) {
    closeModal();
  }
};

function closeModal() {
  var modals = document.getElementsByClassName("modal visible");
  modals[0].classList.remove("visible");
}
