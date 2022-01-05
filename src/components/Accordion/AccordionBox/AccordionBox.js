import React, { useState, useCallback } from "react";
import styles from "./AccordionBox.module.css";

export default function AccordionBox({ provider, title }) {
  const [open, setOpen] = useState(true);
  const onOpenClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>{title}</div>
        <div hidden={!open}>
          {provider.map((user) => {
            return (
              <div className={styles.user} key={user.name}>
                {user.name}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className={styles.openButton}>
          <button className={styles.sign} onClick={onOpenClick}>
            {open ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}
