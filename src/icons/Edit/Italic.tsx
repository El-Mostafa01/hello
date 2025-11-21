import * as React from "react";
import { IconBase } from "../IconBase";
import type { SVGProps } from "react";
const SvgItalic = (props: SVGProps<SVGSVGElement>) => (
  <IconBase
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 19h2m0 0h2m-2 0 4-14m-2 0h2m0 0h2"
    />
  </IconBase>
);
export default SvgItalic;
