<h1 align="center">🌿 Alencss</h1>

<p align="center">
  <strong>Build clean, responsive interfaces with Alencss.</strong><br>
  A modern, lightweight, and extensible SCSS framework for fast and flexible web development. Customize effortlessly with Sass, design with a responsive grid foundation, and craft elegant layouts with simplicity and precision.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/alencss">
    <img src="https://img.shields.io/npm/v/alencss?color=2ea44f&label=version" alt="npm version">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?" alt="license">
  </a>
  <a href="https://www.jsdelivr.com/package/npm/alencss">
    <img src="https://data.jsdelivr.com/v1/package/npm/alencss/badge" alt="jsDelivr badge">
  </a>
  <a href="https://github.com/anexlab/alencss/issues">
    <img src="https://img.shields.io/github/issues/anexlab/alencss?color=ff5f5f" alt="GitHub issues">
  </a>
  <a href="https://github.com/anexlab/alencss/stargazers">
    <img src="https://img.shields.io/github/stars/anexlab/alencss?color=ffb400" alt="GitHub stars">
  </a>
  <a href="https://github.com/anexlab/alencss/network/members">
    <img src="https://img.shields.io/github/forks/anexlab/alencss?color=2ea44f" alt="GitHub forks">
  </a>
</p>

## Table of contents

- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Using in HTML](#using-in-html)
  - [Using in React, Vite, or Next.js](#using-in-react-vite-or-nextjs)
  - [Using with SCSS](#using-with-scss)
  - [Using via CDN](#using-via-cdn)
- [Package info](#package-info)
- [Community](#community)
- [License](#license)
- [Author](#author)
- [Future goals](#future-goals)

## Introduction

Alencss is a modern, SCSS-based CSS framework designed for building clean, responsive, and scalable user interfaces. It provides a lightweight yet powerful foundation for crafting web layouts with ease and consistency. With structured utilities, customizable design tokens, and Sass-driven flexibility, Alencss helps developers create fast, elegant, and maintainable front-end designs without unnecessary complexity.

It supports a responsive grid system, flexible spacing utilities, customizable color palettes, and typography presets—all built with extendable SCSS architecture. Developers can integrate it seamlessly into any workflow, whether working with pure HTML, modern JavaScript frameworks like React or Vue, or build tools such as Vite and Webpack.

## Installation

Alencss can be installed using **npm** for seamless integration into modern development environments or loaded directly via a **CDN** for quick prototyping.

### Using npm

Install Alencss via npm:

```bash
npm install alencss
```

Once installed, import the compiled CSS file into your project:

**For HTML:**

```html
<link rel="stylesheet" href="./node_modules/alencss/dist/alencss.min.css" />
```

**For React, Vite, or Next.js:**

```js
import "alencss/dist/alencss.min.css";
```

### Using CDN

To use Alencss directly in your project without installation, include it via **jsDelivr**:

**Latest version (auto-updates):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/alencss@latest/dist/alencss.min.css"
/>
```

**Specific version (recommended for production):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/alencss@0.0.1/dist/alencss.min.css"
/>
```

## Getting started

Alencss is a modern, SCSS-based CSS framework designed for building clean, responsive, and scalable user interfaces.  
It can be installed via **npm** for modern build tools or loaded directly via a **CDN** for quick prototyping.

---

### Installation

Install Alencss using **npm**:

```bash
npm install alencss
```

Once installed, include it in your project depending on your setup.

---

### Using in HTML

```html
<link rel="stylesheet" href="./node_modules/alencss/dist/alencss.min.css" />
```

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Alencss Example</title>
    <link rel="stylesheet" href="./node_modules/alencss/dist/alencss.min.css" />
  </head>
  <body>
    <h1 class="text-primary text-center">Welcome to Alencss</h1>
    <button class="btn-primary">Click Me</button>
  </body>
</html>
```

---

### Using in React, Vite, or Next.js

```js
import "alencss/dist/alencss.min.css";
```

**Example:**

```jsx
import "alencss/dist/alencss.min.css";

export default function App() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-primary">Hello from Alencss</h1>
      <button className="btn-primary">Get Started</button>
    </div>
  );
}
```

---

### Using with SCSS

For developers customizing or extending styles, import the SCSS source directly:

```scss
@use "alencss/src/main" as *;
```

You can access all variables, mixins, and utilities directly.

**Example:**

```scss
@use "alencss/src/main" as *;

// Example override
.card-custom {
  @extend .card;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn-accent {
  background-color: $primary-color;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
}
```

---

### Using via CDN

You can also include Alencss directly via **jsDelivr**, without installation.

**Latest version (auto-updates):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/alencss@latest/dist/alencss.min.css"
/>
```

**Specific version (recommended for production):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/alencss@0.0.1/dist/alencss.min.css"
/>
```

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alencss CDN Example</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/alencss@latest/dist/alencss.min.css"
    />
  </head>
  <body class="p-4 text-center">
    <h1 class="text-primary">CDN Setup Successful!</h1>
    <p class="text-muted">You’re now using Alencss via jsDelivr.</p>
    <button class="btn-primary">Explore Components</button>
  </body>
</html>
```

## Package info

Alencss is distributed as an open-source npm package and includes both development and production builds.  
You can easily customize, rebuild, and publish updates directly from the project root.

### 📦 Available Commands

| Command               | Description                                             |
| --------------------- | ------------------------------------------------------- |
| `npm install alencss` | Installs the Alencss package.                           |
| `npm run build`       | Compiles `src/main.scss` into CSS files inside `dist/`. |
| `npm publish`         | Publishes a new version of Alencss to npm.              |
| `npm version patch`   | Increments the version number before publishing.        |

### 📁 Build Output

| File                   | Description                                 |
| ---------------------- | ------------------------------------------- |
| `dist/alencss.css`     | Unminified development build for debugging. |
| `dist/alencss.min.css` | Minified production-ready build.            |

### ⚙️ Build Process

Alencss uses a lightweight build script (`dev.js`) to compile SCSS into optimized CSS.  
Run the following command to rebuild:

```bash
npm run build
```

This ensures all SCSS changes are reflected in your `dist/` folder before publishing.

## Community

We welcome contributions from the community! 💚  
Whether it’s fixing a bug, refining styles, enhancing documentation, or adding new features — every contribution helps improve Alencss.

---

## Contribution Workflow

Follow the standard GitHub workflow to propose changes:

1. **Fork** the repository to your GitHub account.
2. **Clone** your fork locally:

```bash
git clone https://github.com/<your-username>/alencss.git
```

3. **Create a new branch** for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Implement and test** your changes.
   Run the build command to verify everything compiles successfully:

   ```bash
   npm run build
   ```

5. **Commit** your updates with a clear, conventional message:

   ```bash
   git commit -m "feat: add new responsive utility classes"
   ```

6. **Push** your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** against the `main` branch with a detailed summary of your changes.

---

## Contribution Guidelines

- Write **clean, modular, and readable SCSS**.
- Use **meaningful commit messages** following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
- Keep your pull requests focused — one feature or fix per PR.
- Update documentation and examples where applicable.
- Follow the existing **project structure** under `src/` and `dist/`.

---

## Reporting Issues

If you discover a bug, inconsistency, or have an idea for improvement:

- Open a [GitHub Issue](https://github.com/anexlab/alencss/issues).
- Provide clear reproduction steps, screenshots, or code snippets if possible.
- Be respectful and descriptive — it helps maintainers respond faster.

---

### 💡 Tips for Contributors

- Always run `npm run build` before submitting a PR.
- Test your updates in a sample HTML or React environment.
- Avoid direct edits in the `dist/` folder — only modify `src/` files.

---

> 💬 **Your contributions make Alencss better for everyone.**
> Thank you for taking the time to help grow the project!

## License

Alencss is an open-source project released under the [MIT License](./LICENSE).

This license grants permission to use, copy, modify, merge, publish, and distribute the software freely, with or without modification, provided that the original copyright and license
notice are included in all copies or substantial portions of the software.

In short — you are free to use Alencss in both personal and commercial projects, with attribution.

---

**License summary:**

- ✅ Free for personal and commercial use
- 🔄 Modification and redistribution allowed
- ⚖️ Must include the original license notice

> © 2025 [Anex Lab](https://github.com/anexlab).  
> Licensed under the [MIT License](./LICENSE).

## Author

**👤 Maintained by [Anex Lab](https://github.com/anexlab)**

Building modern, lightweight, and scalable tools for developers.  
Focused on crafting efficient front-end frameworks and clean design systems.

- 🌐 **Website:** [https://github.com/anexlab](https://github.com/anexlab)
- 📦 **npm:** [https://www.npmjs.com/package/alencss](https://www.npmjs.com/package/alencss)
- 📧 **Email:** [anexlab.dev@gmail.com](mailto:anexlab.dev@gmail.com)

---

## Future goals

Alencss is still in its early stage and will continue to evolve with new features, optimizations, and developer-friendly enhancements.  
Here’s a glimpse at what’s planned for upcoming releases:

---

### 🎨 Core Improvements

- Extend the **utility-first class system** for faster prototyping.
- Add **responsive spacing, typography, and layout utilities**.
- Improve SCSS variable structure for easier theming and customization.

---

### 🧩 Components

- Introduce prebuilt **UI components** such as buttons, modals, alerts, and navigation bars.
- Develop a **responsive grid system** based on modern CSS Grid and Flexbox.
- Add **form styling utilities** with better accessibility support.

---

### 🌗 Themes & Customization

- Implement **dark mode** and **theme switching** capabilities.
- Add **color configuration support** via SCSS variables and maps.
- Provide a **plugin system** for community-driven extensions.

---

### ⚙️ Tooling & Docs

- Create a **live documentation site** with usage examples.
- Add **CLI tools** for faster setup and customization.
- Improve **testing and linting** for production-grade stability.

---

### 💚 Long-Term Vision

To make Alencss a **lightweight, intuitive, and developer-first CSS framework**  
that blends simplicity with flexibility — empowering creators to build faster with cleaner code.

---

> 🧠 _Have suggestions or ideas?_  
> Open a [GitHub Issue](https://github.com/anexlab/alencss/issues) or start a discussion —  
> we’d love to hear from you!

**Connect & Collaborate**  
If you have ideas, suggestions, or want to collaborate on open-source design tools —  
feel free to reach out or open a discussion on GitHub.

<p align="center">
  Made with 💚 by <a href="https://github.com/anexlab"><b>Anex Lab</b></a><br>
  <sub>For developers who love clean, scalable, and modern CSS.</sub>
</p>
