import { useEffect } from "react";
import styles from "./ErrorModal.module.scss";

interface ErrorModalProps {
  msg: string;
  onClose: () => void;
  time?: number;
}

function ErrorModal({ msg, onClose, time = 2200}: ErrorModalProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, time);

    return () => clearTimeout(timer);
  }, [onClose, time]);

  return (
    <div className={styles.modal}>
      <span>{msg}</span>

      <button className={styles.close} onClick={onClose}>×</button>
    </div>
  );
}

export default ErrorModal;