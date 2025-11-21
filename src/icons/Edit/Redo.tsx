import * as React from "react";
import { IconBase } from "../IconBase";
import type { SVGProps } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 8h5V3m-.29 13.357a8 8 0 1 1-.19-8.991"
    />
  </IconBase>
);
export default SvgRedo;
