const defaultConfig = {
  siteName: 'Formulab',
  siteIcon: 'assets/logo.svg',
  contact: {
    whatsapp: 'https://wa.me/966596204057',
    email: 'mailto:allbdrii99@gmail.com'
  },
  pages: [
    {
      slug: 'privacy',
      titles: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
      contents: { en: '', ar: '' }
    },
    {
      slug: 'faq',
      titles: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
      contents: { en: '', ar: '' }
    },
    {
      slug: 'about',
      titles: { en: 'About Us', ar: 'من نحن' },
      contents: { en: '', ar: '' }
    }
  ]
};

function loadConfig() {
  const stored = localStorage.getItem('siteConfig');
  return stored ? JSON.parse(stored) : defaultConfig;
}

function saveConfig(cfg) {
  localStorage.setItem('siteConfig', JSON.stringify(cfg));
}
