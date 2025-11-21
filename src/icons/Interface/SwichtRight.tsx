import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgSwichtRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 18h8a6 6 0 0 0 0-12H8a6 6 0 1 0 0 12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
  </IconBase>
);
export default SvgSwichtRight;
