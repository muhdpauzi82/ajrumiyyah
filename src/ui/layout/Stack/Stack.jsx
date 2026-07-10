import "./Stack.css";

export default function Stack({
  children,
  gap = "md",
  align = "stretch",
  justify = "flex-start",
  className = "",
}) {
  return (
    <div
      className={`ads-stack ads-gap-${gap} ${className}`}
      style={{
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
}