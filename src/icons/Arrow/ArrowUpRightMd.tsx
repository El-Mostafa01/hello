import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowUpRightMd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 17 17 7m0 0H9m8 0v8"
    />
  </IconBase>
);
export default SvgArrowUpRightMd;
