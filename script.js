(() => {
  const btn = document.getElementById('expandBtn');
  const section = document.getElementById('expandSection');
  const container = document.getElementById('expandBtnContainer');
  const handleClick = () => {
    if (container.classList.contains('ebc')) {
      section.style.height = `${section.scrollHeight}px`;
      section.classList.remove('ec');
      container.classList.add('ebo');
      container.classList.remove('ebc');
      setTimeout(() => section.style.height = 'auto', 350);
    } else {
      section.style.height = `${section.scrollHeight}px`;
      setTimeout(() => {
        section.style.height = 'auto';
        section.classList.add('ec');
      }, 0);
      container.classList.add('ebc');
      container.classList.remove('ebo');
    }
  };
  btn.addEventListener('click', handleClick);
})();