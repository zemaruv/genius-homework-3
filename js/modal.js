const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal_btn_open');
const modalBtnClose = document.querySelector('.modal_btn_close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
