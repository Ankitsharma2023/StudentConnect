import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next',"next/core-web-vitals", "next/typescript"],
    rules: {
      // Disable `@typescript-eslint/no-explicit-any`
      '@typescript-eslint/no-explicit-any': 'off',
      
      // Disable `react-hooks/exhaustive-deps` warning for missing dependencies in `useEffect`
      'react-hooks/exhaustive-deps': 'off',
  
      // Disable `@next/next/no-img-element` warning for using <img> instead of <Image>
      '@next/next/no-img-element': 'off',
  
      // Disable `no-var` rule to allow usage of `var`
      'no-var': 'off',
    },
  }),
]

export default eslintConfig;
