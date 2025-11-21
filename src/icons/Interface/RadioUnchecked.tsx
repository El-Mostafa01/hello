import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgRadioUnchecked = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
    />
  </IconBase>
);
export default SvgRadioUnchecked;
