import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgOption = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7h5.094c.33 0 .495 0 .643.047q.2.064.357.202c.117.103.202.245.372.528l5.068 8.446c.17.284.255.425.372.528q.156.137.356.202c.148.047.314.047.644.047H21M15 7h6"
    />
  </IconBase>
);
export default SvgOption;
