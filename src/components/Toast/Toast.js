import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { ToastContext } from '../ToastProvider'

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast }) {
  const { variant, uuid, message } = toast

  const { removeToast } = React.useContext(ToastContext)

  const IconComponent = ICONS_BY_VARIANT[variant]

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variant}
        </VisuallyHidden>
        {message}
      </p>
      <button aria-label="Dismiss message"
        aria-live="off" className={styles.closeButton}
      >
        <X onClick={()=> removeToast(uuid)} size={24} />
      </button>
    </div>
  );
}

export default React.memo(Toast);
