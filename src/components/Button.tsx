import { ButtonSVG } from "../assets/svg";

interface ButtonProps {
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
}
const Button = ({
  className,
  href,
  onClick,
  children,
  px = "px-7",
  white = false,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px} ${
    white ? "text-n-8" : "text-n-1"
  } ${className}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button type="button" name="button" className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSVG(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSVG(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
