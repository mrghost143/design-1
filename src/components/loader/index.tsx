import React from 'react';
import "./loader.scss";

type LoaderSize = "sm" | "md" | "lg";

interface LoaderProps {
  size?: LoaderSize;
  btnLoader?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ size, btnLoader = false }) => {
  const iconSize: { [key in LoaderSize]: string } = {
    sm: "20px",
    md: "30px",
    lg: "40px",
  };

  const loaderSize = size ? iconSize[size] : "25px"; // Default to "25px" if size is undefined

  if (btnLoader) {
    return <span className="spinner" style={{ width: loaderSize }} />;
  }

  return (
    <div className="loader-container">
      <div className="loader spinner" style={{ width: loaderSize }} />
    </div>
  );
};
