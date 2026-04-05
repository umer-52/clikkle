/**
 * Runs before React hydrates (Next `beforeInteractive`).
 * Appwrite parity: docs routes honor persisted theme; all non-doc routes are forced dark.
 */
export const THEME_INIT_SCRIPT = `!function(){try{var k='theme',d=document.documentElement,b=document.body,t=localStorage.getItem(k),p=window.location&&window.location.pathname||'';function s(){return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}function i(x){return/(^|\\/)docs(\\/|$)/.test(x)}var isDocs=i(p),r='dark';if(isDocs){if(t==='light'||t==='dark')r=t;else if(t==='system')r=s()}d.classList.remove('dark','light');d.classList.add(r);if(b){b.classList.remove('dark','light');b.classList.add(r)}if(!isDocs){d.style.colorScheme='dark'}else if(t==='system'){d.style.colorScheme='light dark'}else if(t==='light'||t==='dark'){d.style.colorScheme=t}else{d.style.colorScheme='dark'}}catch(e){}}();`;
