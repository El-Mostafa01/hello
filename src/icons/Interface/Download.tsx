import type { SVGProps } from "react";
import { IconBase } from "../IconBase";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 21h12M12 3v14m0 0 5-5m-5 5-5-5"
    />
  </IconBase>
);
export default SvgDownload;
