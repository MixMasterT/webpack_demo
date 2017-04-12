export default (text = 'Hello Beautiful world') => {
  const element = document.createElement('div');

  element.innerHTML = text;

  return element;
};
