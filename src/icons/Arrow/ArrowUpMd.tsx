import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgArrowUpMd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19V5m0 0-6 6m6-6 6 6"
    />
  </IconBase>
);
export default SvgArrowUpMd;
