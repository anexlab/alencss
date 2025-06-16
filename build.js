const fs = require("fs");
const path = require("path");
const sass = require("sass");
const terser = require("terser");
const chalkImport = import("chalk");

const inputSCSS = "src/main.scss";
const inputJS = "src/main.js";

const outputCSS = "dist/alencss.css";
const outputMINCSS = "dist/alencss.min.css";
const outputJS = "dist/alencss.js";
const outputMINJS = "dist/alencss.min.js";

const timestamp = () =>
  `[${new Date().toLocaleTimeString("en-GB", { hour12: false })}]`;

const cleanDist = () => {
  if (fs.existsSync("dist")) {
    fs.rmSync("dist", { recursive: true, force: true });
  }
  fs.mkdirSync("dist");
};

const compileSCSS = () => {
  const css = sass.compile(inputSCSS, { style: "expanded" });
  const min = sass.compile(inputSCSS, { style: "compressed" });
  fs.writeFileSync(outputCSS, css.css);
  fs.writeFileSync(outputMINCSS, min.css);
};

const compileJS = async () => {
  const jsContent = fs.readFileSync(inputJS, "utf-8");
  fs.writeFileSync(outputJS, jsContent);
  const minified = await terser.minify(jsContent);
  fs.writeFileSync(outputMINJS, minified.code);
};

(async () => {
  const chalk = (await chalkImport).default;

  const log = {
    title: (msg) =>
      console.log(`✨  ${chalk.gray(timestamp())}  ${chalk.bold(msg)}`),
    step: (emoji, msg) =>
      console.log(`   ${emoji}  ${chalk.dim(msg)}`),
    success: (msg) =>
      console.log(`\n✅  ${chalk.gray(timestamp())}  ${chalk.green.bold(msg)}`),
    output: (file) =>
      console.log(`    →  ${chalk.cyan(file)}`),
    error: (msg) =>
      console.log(`❌  ${chalk.gray(timestamp())}  ${chalk.red(msg)}`),
  };

  try {
    log.title("Build started...");
    log.step("🧹", "Cleaning dist/ directory");
    cleanDist();

    log.step("🎨", "Compiling SCSS files");
    compileSCSS();

    log.step("⚙️", "Compiling JavaScript files");
    await compileJS();

    log.success("Build completed successfully");
    [outputCSS, outputMINCSS, outputJS, outputMINJS].forEach(log.output);
  } catch (err) {
    log.error("Build failed!");
    console.error(err);
  }
})();
