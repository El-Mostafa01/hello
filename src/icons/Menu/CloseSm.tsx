import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgCloseSm = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 16-4-4m0 0L8 8m4 4 4-4m-4 4-4 4"
    />
  </IconBase>
);
export default SvgCloseSm;
