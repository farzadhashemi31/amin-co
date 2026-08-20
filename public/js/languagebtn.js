let isEN = true;

function toggleLang() {
  isEN = !isEN;


  ['langBtn', 'langBtn_mobile'].forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    if (isEN) {
      btn.classList.remove('rtl');
    } else {
      btn.classList.add('rtl');
    }
  });


  const pairs = [
    { en: 'enOpt', fa: 'faOpt' },
    { en: 'enOpt_mobile', fa: 'faOpt_mobile' }
  ];

  pairs.forEach(({ en, fa }) => {
    const enEl = document.getElementById(en);
    const faEl = document.getElementById(fa);
    if (!enEl || !faEl) return;

    if (isEN) {
      enEl.className = 'lang-option active';
      faEl.className = 'lang-option inactive';
    } else {
      enEl.className = 'lang-option inactive';
      faEl.className = 'lang-option active';
    }
  });

  setLanguage(isEN ? 'en' : 'fa');
}


const savedLang = localStorage.getItem('lang') || 'en';
if (savedLang === 'fa') {
  isEN = true; 
  toggleLang(); 
} else {
  setLanguage('en');
}