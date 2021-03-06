import { sendData } from './api.js';
import {  setDefault } from './map.js';
import { changeMinPrice, checkCapacity } from './form.js';


const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const successMsgTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMsgTemplate = document.querySelector('#error').content.querySelector('.error');
const resetBtn = adForm.querySelector('.ad-form__reset');

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const addCloseListeners = (node) => {
  const onClose = () => {
    node.remove();
  };

  function onDocumentKeyDown(evt) {
    if (isEscKey(evt)) {
      onClose();
      document.removeEventListener('keydown', onDocumentKeyDown);
    }
  }

  const onNodeClick = () => onClose();

  node.addEventListener('click', onNodeClick);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const resetAdForm = () => {
  adForm.reset();
  mapFilters.reset();
  changeMinPrice();
};

const resetForms = () => {
  resetAdForm();
  setDefault();
};

const showSuccessMsg = () => {
  const success = successMsgTemplate.cloneNode(true);
  document.body.appendChild(success);
  addCloseListeners(success);
};

const showErrorMsg = () => {
  const error = errorMsgTemplate.cloneNode(true);
  document.body.appendChild(error);
  addCloseListeners(error);
};

const onSendSuccess = () => {
  showSuccessMsg();
  resetForms();
};

const onFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    checkCapacity();
    evt.preventDefault();

    if (adForm.checkValidity()) {
      const formData = new FormData(evt.target);
      sendData(onSendSuccess, showErrorMsg, formData);
    }
  });
};

resetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForms();
});

export {
  resetForms,
  onFormSubmit
};
