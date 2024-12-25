# React + TypeScript + Vite
# Live Demo
[FASHION-JEWELRY](https://fashion-jewelry-1.vercel.app/)
# Overview
This project is a React-based implementation of a Fashion Jewelry page, developed with TypeScript, Vite, and styled using Tailwind CSS. The application includes features like product listing, cart functionality, and responsive design.
# Features
- Header: Logo, navigation links, and a search bar.
- Hero Section: A large banner showcasing fashion jewelry.
- Product Grid: Displays jewelry items with images, titles, prices, ratings, and an "Add to Cart" button.
- Cart Page: Shows items added to the cart, quantity selectors, total price calculation, and a remove option.
- Footer: Links to pages like About Us, Contact, and FAQ.
- Responsive Design: Optimized for all screen sizes using Tailwind CSS utilities.
# Technologies Used
- React with TypeScript
- Vite (Development Build Tool)
- React Context API (State Management)
- React Router (Navigation)
- Tailwind CSS (Styling)
# How to Run the Application Locally
## 1. Prerequisites
Ensure the following are installed on your system:

- Node.js  (LTS version recommended)

Download from [Node.js Official Website](https://nodejs.org/en).
- npm or yarn (comes with Node.js installation).
## 2. Clone the Repository
Clone the project repository using the command below:
 ```bash
 git clone [GitHub_Repository_URL]
 ```
Replace [GitHub_Repository_URL] with the actual repository link.
## 3. Navigate to the Project Directory
Change the working directory to the cloned folder:
```bash
cd fashion-jewelry
```
## 4. Install Dependencies
Install the required dependencies using one of the following commands:
```bash
npm install
```
## 5. Start the Development Server
Run the application locally using Vite:
```bash
npm run dev
```
## 6. Open in Browser
After starting the development server, Vite will provide a local development URL. Typically:
```bash
http://localhost:5173
```
Copy and paste the URL into your browser to view the application.
## 7. Tailwind CSS Configuration
Tailwind CSS is already configured in the project. The configuration file tailwind.config.js is located in the root directory. If you wish to extend or modify the design, you can update this file.
## 8. API Integration
The application fetches product data from the DummyJSON API. No additional configuration is required; ensure your system is connected to the internet.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
