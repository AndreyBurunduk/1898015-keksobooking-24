
function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
const showErrorMsg = (message) => {
  const container = document.createElement('div');
  const SHOW_ERROR_TIME = 3000;

  container.style.zIndex = 999;
  container.style.position = 'fixed';
  container.style.left = 0;
  container.style.top = '10px';
  container.style.right = 0;
  container.style.margin = '0 auto';
  container.style.paddingTop = '20px';
  container.style.height = '80px';
  container.style.maxWidth = '600px';
  container.style.border = '4px solid red';
  container.style.borderRadius = '20px';
  container.style.fontSize = '30px';
  container.style.textAlign = 'center';
  container.style.backgroundColor = 'red';
  container.style.color = 'white';
  container.textContent = message;

  document.body.append(container);

  setTimeout(() => {
    container.remove();
  }, SHOW_ERROR_TIME);
};
export {showErrorMsg, debounce };
