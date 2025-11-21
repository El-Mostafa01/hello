import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18 20 3-3m0 0-3-3m3 3h-4a5 5 0 0 1-5-5 5 5 0 0 0-5-5H3m15-3 3 3m0 0-3 3m3-3h-4a4.98 4.98 0 0 0-3 1M3 17h4a4.98 4.98 0 0 0 3-1"
    />
  </IconBase>
);
export default SvgShuffle;
