import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgMoreVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </IconBase>
);
export default SvgMoreVertical;
