let config = loadConfig();

const loginForm = document.getElementById('loginForm');
const panel = document.getElementById('panel');
const loginBox = document.getElementById('login');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'admin' && pass === 'password') {
    loginBox.style.display = 'none';
    panel.style.display = 'block';
    loadFields();
  } else {
    alert('Invalid credentials');
  }
});

function loadFields() {
  document.getElementById('siteName').value = config.siteName;
  document.getElementById('siteIcon').value = config.siteIcon;
  document.getElementById('whatsapp').value = config.contact.whatsapp;
  document.getElementById('email').value = config.contact.email;
  renderPagesEditor();
}

function renderPagesEditor() {
  const container = document.getElementById('pagesContainer');
  container.innerHTML = '';
  config.pages.forEach((p, idx) => {
    const div = document.createElement('div');
    div.className = 'page-editor';
    div.innerHTML = `
      <input class="slug" placeholder="slug" value="${p.slug}"><br>
      <input class="title-en" placeholder="English title" value="${p.titles.en || ''}"><br>
      <input class="title-ar" placeholder="Arabic title" value="${p.titles.ar || ''}"><br>
      <textarea class="content-en" placeholder="English content">${p.contents.en || ''}</textarea><br>
      <textarea class="content-ar" placeholder="Arabic content">${p.contents.ar || ''}</textarea><br>
      <button class="delete btn outline">Delete</button>
      <hr>
    `;
    div.querySelector('.delete').addEventListener('click', () => {
      config.pages.splice(idx,1);
      renderPagesEditor();
    });
    container.appendChild(div);
  });
}

document.getElementById('addPage').addEventListener('click', () => {
  config.pages.push({slug:'', titles:{en:'',ar:''}, contents:{en:'',ar:''}});
  renderPagesEditor();
});

document.getElementById('saveConfig').addEventListener('click', () => {
  config.siteName = document.getElementById('siteName').value;
  config.siteIcon = document.getElementById('siteIcon').value;
  config.contact.whatsapp = document.getElementById('whatsapp').value;
  config.contact.email = document.getElementById('email').value;

  const editors = document.querySelectorAll('#pagesContainer .page-editor');
  config.pages = Array.from(editors).map(ed => ({
    slug: ed.querySelector('.slug').value,
    titles: {
      en: ed.querySelector('.title-en').value,
      ar: ed.querySelector('.title-ar').value
    },
    contents: {
      en: ed.querySelector('.content-en').value,
      ar: ed.querySelector('.content-ar').value
    }
  }));

  saveConfig(config);
  alert('Saved');
});
