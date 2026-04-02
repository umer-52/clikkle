const fs = require('fs');
const path = require('path');

const svelteDir = 'c:/Users/umer/Desktop/vscodeappwrite/src/routes/(marketing)/(components)/bento/(animations)';
const targetDir = 'c:/Users/umer/Desktop/vscodeappwrite/clikkle-app/components/bento-animations';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(svelteDir);

for (const file of files) {
  if (!file.endsWith('.svelte')) continue;
  
  const compName = file.replace('.svelte', '').replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase());
  
  let content = fs.readFileSync(path.join(svelteDir, file), 'utf8');
  
  // Extract script block (for variable dependencies)
  let scriptContent = '';
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch) {
      scriptContent = scriptMatch[1];
  }
  
  // Strip svelte specific syntax
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/, '');
  content = content.replace(/\{#if.*?\}/g, '{true && (');
  content = content.replace(/\{\/if\}/g, ')}');
  content = content.replace(/\{#each.*?\}/g, '{[].map(() => (');
  content = content.replace(/\{\/each\}/g, '))}');
  content = content.replace(/@render children\(\)/g, '{children}');
  
  // Convert basic HTML to JSX
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  content = content.replace(/onclick=/g, 'onClick=');
  content = content.replace(/onmouseover=/g, 'onMouseOver=');
  content = content.replace(/onmouseleave=/g, 'onMouseLeave=');
  content = content.replace(/bind:this=\{.*?\}/g, '');
  content = content.replace(/style="([^"]*)"/g, (match, style) => {
      // Very rough converstion of style string to object for JSX
      return `style={{}}`;
  });
  
  content = content.replace(/<!--[\s\S]*?-->/g, '');

  const attrs = ['stroke-opacity', 'fill-opacity', 'stroke-width', 'clip-path', 'clip-rule', 'fill-rule', 'stroke-linecap', 'stroke-linejoin', 'vector-effect', 'stroke-dasharray', 'stroke-dashoffset', 'stop-color', 'stop-opacity'];
  for (const attr of attrs) {
    const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
    content = content.replace(new RegExp(attr + '=', 'g'), camel + '=');
  }

  // Self closing
  content = content.replace(/<img([^>]*)>/g, '<img$1 />');
  content = content.replace(/<input([^>]*)>/g, '<input$1 />');
  content = content.replace(/<source([^>]*)>/g, '<source$1 />');

  const component = `
"use client";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function Bento${compName}() {
  return (
    <>
      ${content.trim()}
    </>
  );
}
`;

  fs.writeFileSync(path.join(targetDir, `${compName.toLowerCase()}.tsx`), component);
  console.log(`Translated ${file} to Bento${compName}.tsx`);
}
