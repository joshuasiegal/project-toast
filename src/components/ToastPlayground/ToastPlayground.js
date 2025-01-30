import React from 'react';

import { ToastContext } from '../ToastProvider'
import Button from '../Button';
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { currentVariant, setCurrentVariant, toastMessage, setToastMessage, addToast } = React.useContext(ToastContext)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf/>

      <form
        className={styles.controlsWrapper}
        onSubmit={addToast}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={(e) => {
                setToastMessage(e.target.value)
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              VARIANT_OPTIONS.map((opt) => {
                const thisID = `variants-${opt}`
                return (
                  <label key={opt} htmlFor={thisID}>
                    <input
                      id={thisID}
                      type="radio"
                      name="variants"
                      value={opt}
                      checked={currentVariant === opt}
                      onChange={(e) => {
                        setCurrentVariant(e.target.value)
                      }}
                    />
                    {opt}
                  </label>
                )
              })
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
