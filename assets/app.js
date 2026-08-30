function setLanguage(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-lang]').forEach(el=>{el.hidden=el.dataset.lang!==lang;});
  document.querySelectorAll('[data-lang-btn]').forEach(btn=>btn.classList.toggle('active',btn.dataset.langBtn===lang));
  localStorage.setItem('digitalsupplychain-language',lang);
}
document.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('digitalsupplychain-language');
  const browser=(navigator.language||'').toLowerCase();
  setLanguage(saved||(browser.startsWith('es')?'es':'en'));
});
