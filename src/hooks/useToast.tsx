import { useState, useCallback } from 'react'
import { v4 as uuid } from 'uuid'
import { Variant } from '../components/toast/Toast.tsx'

type Toast = {
  id: string
  message: string
  variant: Variant
}

const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, variant: Variant) => {
    const id = uuid()
    setToasts((prevToasts) => [...prevToasts, { id, message, variant }])
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 6000)
  }, [])

  return { toasts, addToast }
}

export default useToast
