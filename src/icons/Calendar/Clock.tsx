import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 7v5h5m-5 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
  </IconBase>
);
export default SvgClock;
