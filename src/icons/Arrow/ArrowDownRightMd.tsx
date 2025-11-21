import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowDownRightMd = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 7 10 10m0 0V9m0 8H9"
    />
  </IconBase>
);
export default SvgArrowDownRightMd;
