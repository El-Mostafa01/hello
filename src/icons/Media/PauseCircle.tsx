import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgPauseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 9v6m-4-6v6m2 6a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
  </IconBase>
);
export default SvgPauseCircle;
