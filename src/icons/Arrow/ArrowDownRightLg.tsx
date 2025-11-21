import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowDownRightLg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.364 18.364v-7.071m0 7.071h-7.071m7.07 0L5.637 5.636"
    />
  </IconBase>
);
export default SvgArrowDownRightLg;
