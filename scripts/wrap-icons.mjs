// ✅ Improved icon wrapper
// Fixes import paths, adds TypeScript typing, and wraps <svg> in <IconBase>

import fs from "fs";
import path from "path";

const ICONS_DIR = path.resolve("src/icons");

function wrapFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Skip non-TSX files
  if (!filePath.endsWith(".tsx")) return;

  // ✅ Ensure we import IconBase correctly
  // Replace "../icons/IconBase" → "../IconBase"
  content = content.replace(/['"]\.\.\/icons\/IconBase['"]/g, '"../IconBase"');

  // ✅ Inject IconBase import if missing
  if (!content.includes("IconBase")) {
    content = content.replace(
      /import\s+\*\s+as\s+React\s+from\s+['"]react['"];/,
      (match) => `${match}\nimport { IconBase } from "../IconBase";`
    );
  }

  // ✅ Add SVGProps typing if missing
  if (!content.includes("SVGProps")) {
    content = content.replace(
      /import\s+\*\s+as\s+React\s+from\s+['"]react['"];/,
      (match) => `${match}\nimport type { SVGProps } from "react";`
    );
  }

  // ✅ Fix props typing if missing
  content = content.replace(
    /\((props)\)\s*=>/g,
    "(props: SVGProps<SVGSVGElement>) =>"
  );

  // ✅ Replace <svg> with <IconBase>
  if (!content.includes("<IconBase")) {
    content = content
      .replace(/<svg([^>]*)>/, "<IconBase$1 {...props}>")
      .replace("</svg>", "</IconBase>");
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log("✅ Fixed:", path.basename(filePath));
}

function processDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) processDir(full);
    else if (file.endsWith(".tsx")) wrapFile(full);
  }
}

processDir(ICONS_DIR);
console.log(
  "🎉 All icons fixed and wrapped with <IconBase> + TypeScript typing!"
);
