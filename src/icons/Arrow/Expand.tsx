import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 19H5v-5m9-9h5v5"
    />
  </IconBase>
);
export default SvgExpand;
