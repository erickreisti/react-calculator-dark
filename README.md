<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# react-calculator-dark
Calculadora Simples - React 18 &amp; Tailwind CSS

Uma calculadora simples construída para praticar o gerenciamento de estado complexo no React e a estilização com a biblioteca de utilitários Tailwind CSS. Este projeto foi criado como parte de uma jornada de aprendizado para consolidar os conceitos de React.

💻 Tecnologias

React 18

TypeScript

Vite

Tailwind CSS

✨ Funcionalidades

Operações básicas: adição, subtração, multiplicação e divisão.

Botões de controle: limpar (C), mudar sinal (+/-) e porcentagem (%).

Suporte a números decimais.

Interface com tema escuro e design moderno.

🚀 Instalação e Uso

Para rodar a calculadora localmente:

# Clone este repositório
$ git clone https://github.com/[SEU-USUARIO]/react-calculator-dark.git

# Navegue até a pasta do projeto
$ cd react-calculator-dark

# Instale as dependências
$ npm install

# Inicie a aplicação em modo de desenvolvimento
$ npm run dev
>>>>>>> 2cde57f1df913d564d458818b9f49da7d6e8a34b
