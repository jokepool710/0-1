import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { tokens } from '../src/tokens.js';

const root = resolve(import.meta.dirname, '..');
const kebab = (key: string) => key.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
const css = `:root {\n${Object.entries(tokens.color).map(([key, value]) => `  --sq-color-${kebab(key)}: ${value};`).join('\n')}\n${Object.entries(tokens.space).map(([key, value]) => `  --sq-space-${key}: ${value};`).join('\n')}\n}`;
const tailwind = `/** Generated from src/tokens.ts. Do not edit. */\nexport default { theme: { extend: { colors: ${JSON.stringify(tokens.color)}, fontFamily: ${JSON.stringify(tokens.font)}, spacing: ${JSON.stringify(tokens.space)} } } };\n`;
const native = `/** Generated from src/tokens.ts. Do not edit. */\nexport const reactNativeTheme = ${JSON.stringify(tokens, null, 2)} as const;\n`;
const files = [['generated/tokens.css', css], ['generated/tailwind-preset.mjs', tailwind], ['generated/react-native-theme.ts', native]] as const;
for (const [file, contents] of files) { const path = resolve(root, file); await mkdir(dirname(path), { recursive: true }); await writeFile(path, contents); }
