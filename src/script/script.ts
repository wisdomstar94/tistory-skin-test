(function() {
  const elements = document.querySelectorAll('.title-row');
  elements.forEach((value) => {
    const element = value as HTMLElement;
    element.addEventListener('click', () => {
      alert('test!');
    });
  });
})();
