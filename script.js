(() => {
  const btn = document.getElementById('expandBtn');
  const section = document.getElementById('expandSection');
  const container = document.getElementById('expandBtnContainer');
  const handleClick = () => {
    section.classList.toggle('e');
    if (container.classList.contains('ebc')) {
      container.classList.add('ebo');
      container.classList.remove('ebc');
    } else {
      container.classList.add('ebc');
      container.classList.remove('ebo');
    }
  };
  btn.addEventListener('click', handleClick);
})();