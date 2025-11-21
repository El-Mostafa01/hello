import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 12 4.243 4.243 8.484-8.486"
    />
  </IconBase>
);
export default SvgCheck;
