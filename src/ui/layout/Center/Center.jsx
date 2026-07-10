import "./Center.css";

export default function Center({
  children,
  className = "",
}) {
  return (
    <div className={`ads-center ${className}`}>
      {children}
    </div>
  );
}