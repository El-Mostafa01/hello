import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowUpRightLg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.365 5.636h-7.071m7.07 0v7.071m0-7.07L5.638 18.363"
    />
  </IconBase>
);
export default SvgArrowUpRightLg;
