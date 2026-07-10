import "./Button.css";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ads-button ads-button-${variant} ads-button-${size} ${className}`}
    >
      {children}
    </button>
  );
}