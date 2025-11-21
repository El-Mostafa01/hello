import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12V7l9 5-9 5zm0 0-9 5V7z"
    />
  </IconBase>
);
export default SvgForward;
