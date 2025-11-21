import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgDragHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2M18 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </IconBase>
);
export default SvgDragHorizontal;
