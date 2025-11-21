import * as React from "react";
import { IconBase } from "../IconBase";
import type { SVGProps } from "react";
const SvgFont = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 18 8 6 3 18m8-4H5m16 4v-3m0 0v-3m0 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </IconBase>
);
export default SvgFont;
