import "./Badge.css";

export default function Badge({
  children,
  variant = "default",
  size = "medium",
  className = "",
}) {
  return (
    <span className={`ads-badge ads-badge-${variant} ads-badge-${size} ${className}`}>
      {children}
    </span>
  );
}