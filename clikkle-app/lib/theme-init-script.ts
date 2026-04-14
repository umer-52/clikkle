/**
 * Runs before React hydrates (Next `beforeInteractive`).
 * Resolves persisted theme on all routes so marketing light mode matches appwrite.io.
 */
export const THEME_INIT_SCRIPT = `!function(){try{var k='theme',d=document.documentElement,b=document.body,t=localStorage.getItem(k);function s(){return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}var r='dark';if(t==='light'||t==='dark')r=t;else if(t==='system')r=s();d.classList.remove('dark','light');d.classList.add(r);if(b){b.classList.remove('dark','light');b.classList.add(r)}if(t==='system'){d.style.colorScheme='light dark'}else if(t==='light'||t==='dark'){d.style.colorScheme=t}else{d.style.colorScheme='dark'}}catch(e){}}();`;
