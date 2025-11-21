import * as React from "react";
import { IconBase } from "../IconBase";
import type { SVGProps } from "react";
const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5v7m0 0v7m0-7h10m0-7v7m0 0v7"
    />
  </IconBase>
);
export default SvgHeading;
