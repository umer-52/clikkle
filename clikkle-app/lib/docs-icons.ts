/** Icon class names matching Appwrite docs (pink-icons `icon-*` + `web-icon-*` font). */

const tutorialIconMap: Record<string, string> = {
  "react native": "icon-react-native",
  react: "icon-react",
  vue: "web-icon-vue",
  angular: "icon-angular",
  svelte: "icon-svelte",
  sveltekit: "icon-svelte",
  "sveltekit ssr": "icon-svelte",
  android: "icon-android",
  apple: "icon-apple",
  flutter: "icon-flutter",
  nuxt: "web-icon-nuxt",
  "nuxt ssr": "web-icon-nuxt",
  stripe: "icon-stripe",
  refine: "web-icon-refine",
  "next.js": "icon-nextjs",
  "next.js ssr": "icon-nextjs",
  astro: "icon-astro",
  "astro ssr": "icon-astro",
};

export function getTutorialIconClass(framework: string | undefined): string {
  if (!framework) return "";
  return tutorialIconMap[framework.toLowerCase()] ?? "";
}
