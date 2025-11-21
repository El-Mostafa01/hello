import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.195 8.765A4 4 0 1 1 12 14v1m.05 4v.1h-.1V19z"
    />
  </IconBase>
);
export default SvgHelp;
