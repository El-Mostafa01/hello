import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowLeftMd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 12H5m0 0 6 6m-6-6 6-6"
    />
  </IconBase>
);
export default SvgArrowLeftMd;
