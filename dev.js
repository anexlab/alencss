const sass = require("sass");
const esbuild = require("esbuild");
const fs = require("fs");
const chalk = require("chalk");

const inputScss = "src/main.scss";
const inputJs = "src/main.js";
const outputCss = "dist/alencss.css";
const outputMinCss = "dist/alencss.min.css";
const outputJs = "dist/alencss.js";
const outputMinJs = "dist/alencss.min.js";

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

const compileScss = (style) => sass.compile(inputScss, { style, sourceMap: false });
const writeCss = (style, outputPath) => fs.writeFileSync(outputPath, compileScss(style).css);

const buildJs = async () => {
  await esbuild.build({
    entryPoints: [inputJs],
    outfile: outputJs,
    bundle: true,
    minify: false,
  });
  await esbuild.build({
    entryPoints: [inputJs],
    outfile: outputMinJs,
    bundle: true,
    minify: true,
  });
};

const showError = (err, label) => {
  log.error(label);
  const line = err.span?.start.line ?? 0;
  const col = err.span?.start.column ?? 0;
  const file = inputScss.replace(/\\/g, "/");
  const lines = fs.readFileSync(inputScss, "utf8").split("\n");

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

const initialBuild = async () => {
  try {
    let built = false;

    if (!fs.existsSync(outputCss) || !fs.existsSync(outputMinCss)) {
      writeCss("expanded", outputCss);
      writeCss("compressed", outputMinCss);
      log.initial(`Initial SCSS build → ${outputCss}, ${outputMinCss}`);
      built = true;
    }
    if (!fs.existsSync(outputJs) || !fs.existsSync(outputMinJs)) {
      await buildJs();
      log.initial(`Initial JS build → ${outputJs}, ${outputMinJs}`);
      built = true;
    }
    if (!built) {
      compileScss("expanded");
      compileScss("compressed");
    }
    log.watch(`Watching for changes in ${inputScss} and ${inputJs}`);
  } catch (err) {
    showError(err, "Initial build failed");
  }
};

const rebuildScss = () => {
  try {
    writeCss("expanded", outputCss);
    writeCss("compressed", outputMinCss);
    log.success(`Compiled → ${outputCss}, ${outputMinCss}`);
    log.watch(`Watching for changes in ${inputScss} and ${inputJs}`);
  } catch (err) {
    showError(err, "Compilation failed");
  }
};

const rebuildJs = async () => {
  try {
    await buildJs();
    log.success(`Compiled → ${outputJs}, ${outputMinJs}`);
    log.watch(`Watching for changes in ${inputScss} and ${inputJs}`);
  } catch (err) {
    log.error("JS Compilation failed");
    console.log(err.message);
  }
};

initialBuild();

fs.watchFile(inputScss, { interval: 300 }, () => {
  rebuildScss();
});

fs.watchFile(inputJs, { interval: 300 }, () => {
  rebuildJs();
});