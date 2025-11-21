import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6v8m.05 4v.1h-.1V18z"
    />
  </IconBase>
);
export default SvgWarning;
