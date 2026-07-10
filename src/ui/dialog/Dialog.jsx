import Button from "../button";
import "./Dialog.css";

export default function Dialog({
  open = false,
  title = "",
  children,
  onClose,
  size = "medium",
}) {
  if (!open) return null;

  return (
    <div className="ads-dialog-overlay">
      <div className={`ads-dialog ads-dialog-${size}`}>
        {title && <h2 className="ads-dialog-title">{title}</h2>}

        <div className="ads-dialog-content">{children}</div>

        <div className="ads-dialog-actions">
          <Button variant="secondary" onClick={onClose}>
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
}