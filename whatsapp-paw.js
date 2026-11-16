(() => {
  // Set only to the business number supplied by the site owner (country code + digits).
  const phone = '8617629173592';
  const paw = document.createElement(phone ? 'a' : 'button');
  paw.className = 'whatsapp-paw';
  paw.setAttribute('aria-label', 'Chat with us on WhatsApp');
  paw.innerHTML = '<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="14" cy="23" rx="7" ry="10" transform="rotate(-28 14 23)"/><ellipse cx="27" cy="14" rx="7" ry="10" transform="rotate(-8 27 14)"/><ellipse cx="42" cy="16" rx="7" ry="10" transform="rotate(14 42 16)"/><ellipse cx="53" cy="28" rx="7" ry="10" transform="rotate(30 53 28)"/><path d="M15 46c0-8 7-17 16-17s18 11 18 19c0 7-6 11-12 8-4-2-7-2-11 0-7 3-12-2-11-10Z"/></svg><span class="paw-label">Chat on WhatsApp</span><span class="paw-status" aria-hidden="true"></span>';
  if (phone) {
    paw.href = 'whatsapp.html';
    paw.target = '_blank'; paw.rel = 'noopener noreferrer';
  } else {
    paw.type = 'button';
    paw.addEventListener('click', () => {
      let notice = document.querySelector('.paw-notice');
      if (!notice) {
        notice = document.createElement('div'); notice.className = 'paw-notice'; notice.setAttribute('role','status');
        notice.innerHTML = '<button type="button" aria-label="Close WhatsApp notice">×</button><strong>WhatsApp</strong><p>Local preview · contact number not configured yet.</p>';
        notice.querySelector('button').addEventListener('click',()=>notice.remove());
        document.body.append(notice);
      } else notice.remove();
    });
  }
  document.body.append(paw);
})();

