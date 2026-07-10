import "./Section.css";

export default function Section({
  children,
  className = "",
}) {
  return (
    <section className={`ads-section ${className}`}>
      {children}
    </section>
  );
}