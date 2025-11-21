import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowUpLeftSm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 16 8 8m0 0v6m0-6h6"
    />
  </IconBase>
);
export default SvgArrowUpLeftSm;
