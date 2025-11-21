import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgCloseLg = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21 21-9-9m0 0L3 3m9 9 9-9m-9 9-9 9"
    />
  </IconBase>
);
export default SvgCloseLg;
