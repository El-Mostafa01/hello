import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgTrendingUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20 7-5.846 5.938c-.105.106-.158.16-.205.202-.76.68-1.907.68-2.667 0a5 5 0 0 1-.205-.203c-.105-.106-.158-.16-.205-.202a2 2 0 0 0-2.667 0c-.047.042-.1.096-.204.202L4 17M20 7v6m0-6h-6"
    />
  </IconBase>
);
export default SvgTrendingUp;
