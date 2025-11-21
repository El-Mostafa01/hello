// ✅ Compatible with SVGR v8+ and Node 18–24
// This wraps every generated icon in <IconBase />

function template(variables, opts, state) {
  const { componentName, jsx } = variables;

  return `
    import * as React from "react";
    import { IconBase } from "./src/icons/IconBase";

    const ${componentName} = (props) => (
      <IconBase {...props}>
        ${jsx.children.map((child) => child).join("\n")}
      </IconBase>
    );

    export default ${componentName};
  `;
}

module.exports = template;
