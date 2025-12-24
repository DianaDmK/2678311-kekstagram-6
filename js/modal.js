const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

function createModal(template, className, onButtonClick) {
  const modalElement = template.cloneNode(true);

  const button = modalElement.querySelector(`.${className}__button`);
  if (button) {
    button.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', onEscPress);
  document.addEventListener('click', onOverlayClick);

  function closeModal() {
    document.removeEventListener('keydown', onEscPress);
    document.removeEventListener('click', onOverlayClick);
    button.removeEventListener('click', closeModal);

    modalElement.remove();

    onButtonClick();
  }

  function onEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeModal();
    }
  }

  function onOverlayClick(evt) {
    if (evt.target === modalElement) {
      closeModal();
    }
  }
}

const showInteractiveError = () => createModal(errorTemplate, 'error');
const showSuccess = () => createModal(successTemplate, 'success');

export { showInteractiveError, showSuccess };
