import "./Card.css";

export default function Card({
  children,
  variant = "default",
  padding = "medium",
  className = "",
}) {
  return (
    <div className={`ads-card ads-card-${variant} ads-card-${padding} ${className}`}>
      {children}
    </div>
  );
}