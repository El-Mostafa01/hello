import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgShrink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 14h5v5m9-9h-5V5"
    />
  </IconBase>
);
export default SvgShrink;
