# Contributing to AlenCSS

Thank you for your interest in contributing to AlenCSS 💚

We welcome bug fixes, improvements, documentation updates, new utilities, components, and ideas that help improve the framework.

---

## Getting Started

Fork the repository and clone it locally:

```bash
git clone https://github.com/<your-username>/alencss.git
```

Move into the project directory:

```bash
cd alencss
```

Install dependencies:

```bash
npm install
```

---

## Development

Start development mode:

```bash
npm run dev
```

Build the framework:

```bash
npm run build
```

The compiled files will be generated inside the `dist/` directory.

---

## Project Structure

```txt
src/
├── js/
├── scss/
│   ├── base/
│   ├── components/
│   ├── core/
│   ├── layout/
│   └── utilities/
dist/
```

---

## Contribution Workflow

1. Fork the repository

2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes

4. Test and build the project:

```bash
npm run build
```

5. Commit your changes:

```bash
git commit -m "feat: add new utility classes"
```

6. Push your branch:

```bash
git push origin feature/your-feature-name
```

7. Open a Pull Request

---

## Contribution Guidelines

- Write clean and readable SCSS
- Keep code modular and maintainable
- Follow the existing project structure
- Avoid editing compiled files inside `dist/`
- Test your changes before submitting
- Keep pull requests focused on a single feature or fix

---

## Reporting Issues

If you find a bug or want to request a feature, please open an issue:

https://github.com/anexlab/alencss/issues

When reporting issues, include:

- Clear description
- Steps to reproduce
- Expected behavior
- Screenshots or code examples if possible

---

## Commit Message Style

Recommended commit format:

```bash
feat: add responsive spacing utilities
fix: resolve navbar alignment issue
docs: update installation guide
```

---

## Questions

If you have questions or ideas, feel free to open a discussion or issue on GitHub.

Thank you for contributing to AlenCSS 🚀
