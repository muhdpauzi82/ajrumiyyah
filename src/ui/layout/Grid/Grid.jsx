import "./Grid.css";

export default function Grid({
  children,
  columns = 2,
  gap = "lg",
  className = "",
}) {
  return (
    <div
      className={`ads-grid ads-gap-${gap} ${className}`}
      style={{
        gridTemplateColumns:`repeat(${columns},1fr)`
      }}
    >
      {children}
    </div>
  );
}