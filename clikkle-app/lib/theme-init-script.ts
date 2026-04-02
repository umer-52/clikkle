/**
 * Runs before React hydrates (Next `beforeInteractive`).
 * Mirrors Svelte `getPreferredTheme` + `applyTheme` on `document.documentElement`
 * so the first paint matches `localStorage.theme` and avoids a flash of wrong theme.
 */
export const THEME_INIT_SCRIPT = `!function(){try{var k='theme',d=document.documentElement,t=localStorage.getItem(k);function s(){return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}var r='dark';if(t==='light'||t==='dark')r=t;else if(t==='system')r=s();d.classList.remove('dark','light');d.classList.add(r);if(t==='system')d.style.colorScheme='light dark';else if(t==='light'||t==='dark')d.style.colorScheme=t;else d.style.colorScheme='dark'}catch(e){}}();`;
