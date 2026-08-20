async function setLanguage(lang) {
  localStorage.setItem('lang', lang);

  const response = await fetch(`/js/language/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key]) {
      el.setAttribute('placeholder', translations[key]);
    }
  });
}
