import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext()

function ToastProvider({children}) {
  const [currentVariant, setCurrentVariant] = React.useState('notice')
  const [toastMessage, setToastMessage] = React.useState('')
  
  const [toasts, setToasts] = React.useState([])

  useEscapeKey(() => { setToasts([]) })

  const removeToast = React.useCallback((uuid) => {
    const newToasts = toasts.filter((toast) => {
      return (toast.uuid !== uuid)
    })
    setToasts(newToasts)
  }, [toasts])

  function addToast(e) {
    e.preventDefault()

    if (!toastMessage) { return }

    const uuid = crypto.randomUUID()
    const newToast = { variant: currentVariant, message: toastMessage, uuid }
    const newToasts = [...toasts, newToast]
    setToasts(newToasts)
    setCurrentVariant('notice')
    setToastMessage('')
  }

  return <ToastContext.Provider value={
    {
      currentVariant, setCurrentVariant,
      toastMessage, setToastMessage,
      toasts,
      addToast,
      removeToast
    }
  }>{children}</ToastContext.Provider>;
}

export default ToastProvider;
