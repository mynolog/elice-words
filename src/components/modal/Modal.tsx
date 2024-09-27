import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import ModalContainer from './container/ModalContainer.tsx'

type ModalProps = {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')!
  return createPortal(<ModalContainer>{children}</ModalContainer>, modalRoot)
}

export default Modal
