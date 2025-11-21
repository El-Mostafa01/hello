import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgCheckAllBig = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 12 4.95 4.95L22.557 6.343M2.05 12.05 7 17M17.606 6.394l-5.303 5.303"
    />
  </IconBase>
);
export default SvgCheckAllBig;
