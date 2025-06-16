const sass = require("sass");
const fs = require("fs");
const chalk = require("chalk");

const inputFile = "src/main.scss";
const outputCSS = "dist/alencss.css";
const outputMIN = "dist/alencss.min.css";

if (!fs.existsSync("dist")) fs.mkdirSync("dist");

const timestamp = () => {
  const now = new Date();
  return `[${now.toLocaleTimeString("en-GB", { hour12: false })}]`;
};

const log = {
  initial: (msg) => console.log(`🚀  ${chalk.gray(timestamp())}  ${chalk.green(msg)}`),
  success: (msg) => console.log(`✅  ${chalk.gray(timestamp())}  ${chalk.green(msg)}`),
  error: (msg) => console.log(`❌  ${chalk.gray(timestamp())}  ${chalk.red(msg)}`),
  watch: (msg) => console.log(`👀  ${chalk.gray(timestamp())}  ${chalk.cyan(msg)}`),
};

const compileFile = (style) => sass.compile(inputFile, { style, sourceMap: false });

const writeFile = (outputPath, style) => {
  const result = compileFile(style);
  fs.writeFileSync(outputPath, result.css);
};

const showError = (err, label) => {
  log.error(label);
  const line = err.span?.start.line ?? 0;
  const col = err.span?.start.column ?? 0;
  const file = inputFile.replace(/\\/g, "/");
  const lines = fs.readFileSync(inputFile, "utf8").split("\n");

  const errorLine = lines[line] || "";
  const pointer = " ".repeat(col) + "^";

  console.log();
  console.log("   " + chalk.red.bold(err.message.split("\n")[0]));
  console.log();
  console.log("   " + chalk.gray(errorLine));
  console.log("   " + chalk.gray(pointer));
  console.log("   " + chalk.dim(`${file} ${line + 1}:${col + 1}  root stylesheet`));
  console.log();
};

const initialBuild = () => {
  const cssExists = fs.existsSync(outputCSS);
  const minExists = fs.existsSync(outputMIN);

  try {
    if (!cssExists || !minExists) {
      writeFile(outputCSS, "expanded");
      writeFile(outputMIN, "compressed");
      log.initial(`Initial build complete → ${outputCSS}, ${outputMIN}`);
    } else {
      compileFile("expanded");
      compileFile("compressed");
    }
    log.watch(`Watching for changes in ${inputFile}`);
  } catch (err) {
    showError(err, "Initial build failed");
  }
};

const rebuild = () => {
  try {
    writeFile(outputCSS, "expanded");
    writeFile(outputMIN, "compressed");
    log.success(`Compiled → ${outputCSS}, ${outputMIN}`);
    log.watch(`Watching for changes in ${inputFile}`);
  } catch (err) {
    showError(err, "Compilation failed");
  }
};

initialBuild();

fs.watchFile(inputFile, { interval: 300 }, () => {
  rebuild();
});
