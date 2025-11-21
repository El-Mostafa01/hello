import * as React from "react";
import { IconBase } from "../IconBase";
import type { SVGProps } from "react";
const SvgSortAscending = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 17h6m-6-5h9m5-1v8m0 0 3-3m-3 3-3-3M4 7h12"
    />
  </IconBase>
);
export default SvgSortAscending;
