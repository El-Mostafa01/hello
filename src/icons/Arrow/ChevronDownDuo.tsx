import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgChevronDownDuo = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 13-4 4-4-4m8-6-4 4-4-4"
    />
  </IconBase>
);
export default SvgChevronDownDuo;
