import * as React from "react";
import { IconBase } from "../IconBase";
import type { SVGProps } from "react";
const SvgListRemove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 17h7m5-1h6M3 12h11M3 7h11"
    />
  </IconBase>
);
export default SvgListRemove;
