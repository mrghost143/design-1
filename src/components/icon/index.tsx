import React from 'react';
import { RiFileList2Line } from "react-icons/ri";
import { CiReceipt } from "react-icons/ci";

const icons = {
  "file-list": RiFileList2Line,
  "report": CiReceipt,
};

type IconName = keyof typeof icons;

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: number;
  color?: string;
  stroke?: string;
  ariaLabel?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  stroke = "",
  ariaLabel,
  className = "",
  ...rest
}) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <span
      role="icon"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      className={`${className} cursor-pointer`}
      style={{
        display: "inline-flex",
        placeContent: "center",
        width: size,
        height: size,
        color,
        ...rest?.style,
      }}
      {...rest}
    >
      <IconComponent size={size} color={color} fill={color} stroke={stroke} />
    </span>
  );
};
