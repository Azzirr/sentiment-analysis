import { MouseEventHandler, useEffect, useState } from "react";
import "./Button.css";

interface ButtonProps {
  children: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  const [buttonText, setButtonText] = useState<string>(children);

  useEffect(() => {
    setButtonText(children);
  }, [children]);

  return (
    <div className="custom-button-container">
      <button className={`custom-button ${className}`} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
