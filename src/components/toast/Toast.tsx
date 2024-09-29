import type { CSSProperties } from 'react'

type ToastProps = {
  message: string
  variant: Variant
  style?: CSSProperties
}

export type Variant = 'success' | 'update' | 'delete' | 'warning'

type ToastColor = {
  success: string
  update: string
  delete: string
  warning: string
}

const buttonColor: ToastColor = {
  success: '#28a745',
  update: '#007bff',
  delete: '#dc3545',
  warning: '#ffc107',
}

const Toast = ({ message, variant, style = {} }: ToastProps) => {
  return (
    <div
      style={{ backgroundColor: buttonColor[variant], ...style }}
      className="z-[999] fixed top-5 right-5 text-lg text-white py-2.5 px-5 rounded-lg shadow-lg transition duration-500 ease-in opacity-100"
    >
      <span>{message}</span>
    </div>
  )
}

export default Toast
