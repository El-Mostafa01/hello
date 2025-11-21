import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 7 5 5-5 5m-6 0-5-5 5-5"
    />
  </IconBase>
);
export default SvgCode;
