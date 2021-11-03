let modalState = false;
const showImage = (image) => {
    const content = document.getElementById('content');
    content.src = image.src;
    openModal();
}
const openModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.add('modal__open');
    modal.classList.remove('modal__close');
    modalState = true;
}
const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.add('modal__close');
    modal.classList.remove('modal__open');
    modalState = false;
}
const toogleModal = () => {
    const modal = document.getElementById('modal');
    if (modalState) {
        modal.classList.add('modal__close');
        modal.classList.remove('modal__open');
    } else {
        modal.classList.add('modal__open');
        modal.classList.remove('modal__close');
    }
    modalState = !modalState;
}