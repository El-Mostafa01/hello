import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowLeftRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 13 3 3m0 0-3 3m3-3H5m3-5L5 8m0 0 3-3M5 8h14"
    />
  </IconBase>
);
export default SvgArrowLeftRight;
