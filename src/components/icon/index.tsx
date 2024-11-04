import React from 'react';
import { CiReceipt } from "react-icons/ci";
import { HiAtSymbol } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { HiMiniCircleStack } from "react-icons/hi2";
import { BsHddStack } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";

const icons = {
  "menu": HiMenu,
  "home": FaHome,
  "master": HiMiniCircleStack,
  "compliance": BsHddStack,
  "log": FaRegFolder,
  "setting": IoSettingsOutline,
  "report": CiReceipt,
  "logo": HiAtSymbol,
  "alert":FaRegBell,
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
