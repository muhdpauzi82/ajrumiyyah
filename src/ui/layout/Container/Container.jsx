import "./Container.css";

export default function Container({
  children,
  width = "xl",
  className = "",
}) {
  return (
    <div
      className={`ads-container ads-container-${width} ${className}`}
    >
      {children}
    </div>
  );
}