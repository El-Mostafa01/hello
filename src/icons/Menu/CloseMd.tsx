import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgCloseMd = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
    />
  </IconBase>
);
export default SvgCloseMd;
