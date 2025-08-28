const translations = {
  en: {
    'hero.lead': 'The advanced FORMULAB platform has everything a perfumer needs to get started.',
    'features.header': 'Features',
    'feature.track': 'Track your material details',
    'feature.search': 'Advanced search within material information',
    'feature.stats': 'Detailed statistics for your formula',
    'feature.restrictions': 'Calculation of restrictions on materials and natural oils',
    'feature.more': 'and more',
    'feature.backup': 'Full app backup',
    'feature.icloud': 'iCloud backup across all your devices',
    'feature.export': 'Export formula or all materials as PDF',
    'footer.description': 'The advanced FORMULAB platform has everything a perfumer needs to get started.',
    'footer.download': 'Download the app',
    'footer.linksTitle': 'Important links'
  },
  ar: {
    'hero.lead': 'منصة فورميولاب المتقدمة تحتوي على كل ما يحتاجه العطار للبدء.',
    'features.header': 'المزايا',
    'feature.track': 'تتبع تفاصيل موادك',
    'feature.search': 'بحث متقدم ضمن معلومات المواد',
    'feature.stats': 'إحصائيات مفصلة لصيغتك',
    'feature.restrictions': 'حساب القيود على المواد والزيوت الطبيعية',
    'feature.more': 'والمزيد',
    'feature.backup': 'نسخ احتياطي كامل للتطبيق',
    'feature.icloud': 'نسخ على iCloud لجميع أجهزتك',
    'feature.export': 'تصدير الفورملا أو جميع المواد PDF',
    'footer.description': 'منصة فورميولاب المتقدمة تحتوي على كل ما يحتاجه العطار للبدء.',
    'footer.download': 'تحميل التطبيق',
    'footer.linksTitle': 'روابط مهمة'
  }
};

let currentLang = 'ar';
let darkMode = true;
let config = loadConfig();

function renderConfig() {
  const brand = document.querySelector('.brand');
  if (brand) brand.textContent = config.siteName;

  const footerLogo = document.querySelector('.footer-logo');
  if (footerLogo) footerLogo.src = config.siteIcon;

  const pagesNav = document.getElementById('footerPages');
  if (pagesNav) {
    pagesNav.innerHTML = '';
    config.pages.forEach(page => {
      const a = document.createElement('a');
      a.href = `page.html?slug=${encodeURIComponent(page.slug)}`;
      a.textContent = page.titles[currentLang] || '';
      pagesNav.appendChild(a);
    });
  }

  const whats = document.getElementById('whatsLink');
  if (whats) whats.href = config.contact.whatsapp;
  const mail = document.getElementById('mailLink');
  if (mail) mail.href = config.contact.email;

  const footerCopy = document.querySelector('.footer-copy');
  if (footerCopy) footerCopy.innerHTML = `© <span id="year"></span> ${config.siteName}`;
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const titleEl = document.querySelector('title');
  if (titleEl) titleEl.textContent = config.siteName;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[currentLang][key];
    if (text) el.textContent = text;
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = currentLang === 'ar' ? 'EN' : 'ع';
  renderConfig();
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyTranslations();
  });
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('light', !darkMode);
    themeToggle.textContent = darkMode ? '🌙' : '☀️';
  });
  document.body.classList.toggle('light', !darkMode);
  applyTranslations();
});
