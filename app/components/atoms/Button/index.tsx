import classNames from "classnames";
import { ButtonHTMLAttributes, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "pink" | "green" | "red" | "blue";
  icon?: "x" | "check" | "back";
  className?: string;
  onClick?: () => void;
}

function Button({
  children,
  variant,
  icon,
  className,
  onClick,
  ...nativeProps
}: ButtonProps) {
  const [hover, setHover] = useState(false);

  const LabelComponent = () => {
    if (icon) {
      let iconButton = null;
      let buttonProps = {};

      switch (icon) {
        case "x":
          iconButton = faXmark;
          buttonProps = { bounce: hover };
          break;
        case "back":
          iconButton = faCircleLeft;
          buttonProps = { beat: hover };
          break;
        case "check":
          iconButton = faCheck;
          buttonProps = { shake: hover };
          break;
        default:
          iconButton = null;
      }

      return (
        <div className="flex gap-3 items-center justify-center">
          {iconButton && <FontAwesomeIcon icon={iconButton} {...buttonProps} />}
          <span>{children}</span>
        </div>
      );
    }
    return <>{children}</>;
  };

  const handleHover = (status: boolean) => {
    if (icon) {
      setHover(status);
    }
  };

  const handleClick = () => {
    handleHover(false);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={classNames(
        "text-white text-[30px] py-[7px] px-[18px] rounded-[10px] hover:brightness-110 hover:scale-110 w-full disabled:hover:scale-100 disabled:hover:brightness-100 disabled:opacity-80",
        {
          "bg-[#DDB2E4]": variant === "pink",
          "bg-[#82D675]": variant === "green",
          "bg-red-400": variant === "red",
          "bg-sky-500": variant === "blue",
        },
        className
      )}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={handleClick}
      {...nativeProps}
    >
      <LabelComponent />
    </button>
  );
}

export default Button;
