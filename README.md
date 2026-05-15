<h1 align="center">🌿 AlenCSS</h1>

<p align="center">
  Modern utility-first SCSS framework for building fast, responsive, and customizable user interfaces.
</p>

<p align="center">
  Lightweight • Responsive • Customizable • Open Source
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

## Introduction

AlenCSS is a lightweight utility-first SCSS framework built for modern frontend development. It provides responsive layouts, reusable utilities, and customizable styling tools for building clean and scalable user interfaces.

## Getting Started

AlenCSS can be used in HTML projects, modern frameworks like React or Next.js, or directly through a CDN.

### Installation

Install AlenCSS using npm:

```bash
npm install alencss
```

### Using in HTML

Add the stylesheet inside your `<head>` tag:

```html
<link rel="stylesheet" href="./node_modules/alencss/dist/alencss.min.css" />
```

Example:

```html
<h1 class="text-primary text-center">Welcome to AlenCSS</h1>
<button class="btn-primary">Get Started</button>
```

### Using in React, Vite, or Next.js

Import the CSS file into your application:

```js
import "alencss/dist/alencss.min.css";
```

Example:

```jsx
export default function App() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-primary">Hello from AlenCSS</h1>
      <button className="btn-primary">Get Started</button>
    </div>
  );
}
```

### Using with SCSS

Import the SCSS source files for customization:

```scss
@use "alencss/src/main" as *;
```

Example:

```scss
@use "alencss/src/main" as *;

.card-custom {
  @extend .card;
  border-radius: 12px;
}
```

### CDN

Use AlenCSS directly without installation:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/alencss@0.0.2/dist/alencss.min.css"
/>
```

## Contributing

Contributions, issues, and feature requests are welcome.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

## License

Licensed under the MIT License.

See [LICENSE](./LICENSE) for more information.

## Author

Maintained by [Anex Lab](https://github.com/anexlab)

- GitHub: https://github.com/anexlab
- npm: https://www.npmjs.com/package/alencss
