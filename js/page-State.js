const pageForm = (boolean) =>{

  const form = document.querySelector('.ad-form');
  const filters = document.querySelector('.map__filters');
  const filtersHousing = Array.from(form.getElementsByTagName('fieldset'));
  if(boolean) {
    form.classList.add('ad-form--disabled');
    filters.classList.add('map__filters--disabled');
    filtersHousing.forEach((element) => {
      element.disabled = true;
    });
  } else {
    form.classList.remove('ad-form--disabled');
    filters.classList.remove('map__filters--disabled');
    filtersHousing.forEach((element) => {
      element.disabled = false;
    });
  }

};
export { pageForm };
