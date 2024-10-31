import React, { useMemo, useCallback, ReactNode } from 'react';
import { Loader } from "../loader";

type ButtonStatus = "invalid" | "loading" | "valid" | "disable";
type ButtonMode = "primary" | "secondary" | "danger" | string; // Add additional modes as necessary

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  status?: ButtonStatus;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  mode?: ButtonMode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = React.memo(({
  type = "button",
  children,
  status = "invalid",
  onClick,
  mode = "primary",
  className: rootBtnClass = "",
  ...rest
}) => {
  const isLoading = status === "loading";
  const isInvalid = status === "invalid";
  const isValid = status === "valid";
  const isDisabled = status === "disable";

  const className = useMemo(() => {
    return `btn btn-${mode} ${isValid ? "valid" : ""}${isInvalid ? "invalid" : ""}${isLoading ? "loading" : ""}${isDisabled ? "disable" : ""} ${rootBtnClass}`.trim();
  }, [isValid, isInvalid, isLoading, isDisabled, mode, rootBtnClass]);

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && !isLoading && onClick) {
      onClick(event);
    }
  }, [isDisabled, isLoading, onClick]);

  return (
    <button
      type={type}
      {...rest}
      disabled={isDisabled || isLoading}
      className={className}
      onClick={handleClick}
    >
      {isLoading ? <Loader size="sm" btnLoader={true} /> : children}
    </button>
  );
});
