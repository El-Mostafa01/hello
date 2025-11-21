import * as React from "react";
import { IconBase } from "../IconBase";
import type { SVGProps } from "react";
const SvgTextAlignRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 18H10m10-4H4m16-4H10m10-4H4"
    />
  </IconBase>
);
export default SvgTextAlignRight;
