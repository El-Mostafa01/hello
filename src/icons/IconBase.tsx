
export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  fill?: string;
}

export const IconBase: React.FC<IconBaseProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  fill = "none",
  children,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    fill={fill}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

export default IconBase;
