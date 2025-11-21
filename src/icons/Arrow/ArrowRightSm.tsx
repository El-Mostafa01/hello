import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowRightSm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 12h10m0 0-4-4m4 4-4 4"
    />
  </IconBase>
);
export default SvgArrowRightSm;
