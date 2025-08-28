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
    'footer.linksTitle': 'Important links',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.faq': 'FAQ',
    'footer.about': 'About Us'
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
    'footer.linksTitle': 'روابط مهمة',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.faq': 'الأسئلة الشائعة',
    'footer.about': 'من نحن'
  }
};

let currentLang = 'ar';
let darkMode = true;

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
}

document.addEventListener('DOMContentLoaded', () => {
  const whats = document.getElementById('whatsLink');
  if (whats) whats.href = 'https://wa.me/966596204057';
  const mail = document.getElementById('mailLink');
  if (mail) mail.href = 'mailto:allbdrii99@gmail.com';
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
