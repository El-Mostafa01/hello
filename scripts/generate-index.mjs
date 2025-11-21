import fs from "fs";
import path from "path";

const iconsDir = path.resolve("src/icons");
let exports = "";
const seen = new Map(); // name -> relativePath

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(entryPath);
    } else if (entry.name.endsWith(".tsx")) {
      const base = path.basename(entry.name, ".tsx");

      // skip index files
      if (base.toLowerCase() === "index") return;

      const relativePath = path
        .relative(iconsDir, entryPath)
        .replace(/\\/g, "/")
        .replace(/\.tsx$/, "");

      // duplicate detection
      if (seen.has(base)) {
        const first = seen.get(base);
        console.warn(
          `⚠️  Duplicate component name detected: "${base}"\n` +
            `    - ${first}\n` +
            `    - ${relativePath}\n` +
            `    → Please rename one file OR remove the accidental copy.`
        );
        // Skip adding the duplicate to avoid breaking the build
        return;
      }

      seen.set(base, relativePath);
      exports += `export { default as ${base} } from "./${relativePath}";\n`;
    }
  });
}

walk(iconsDir);

const outputPath = path.join(iconsDir, "index.ts");
fs.writeFileSync(outputPath, exports || "// (empty)\n");
console.log("✅ src/icons/index.ts generated successfully!");
