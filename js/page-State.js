const pageForm = () =>{

  const form = document.querySelector('.ad-form');
  form.classList.toggle('ad-form--disabled');
  (form.querySelectorAll('.ad-form__element')).forEach((item)=>{
    item.classList.toggle('ad-form__element--disabled');
  });
  document.querySelector('.map__filters').classList.toggle('map__filters--disabled');
};
export { pageForm };
