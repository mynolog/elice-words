import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import ModalContainer from './modalContainer/ModalContainer.tsx'

type ModalProps = {
  children: ReactNode
  isModalOpen: boolean
  handleCloseModal: () => void
}

const Modal = ({ children, isModalOpen, handleCloseModal }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')!
  return createPortal(
    <ModalContainer
      isModalOpen={isModalOpen}
      handleCloseModal={handleCloseModal}
    >
      {children}
    </ModalContainer>,
    modalRoot,
  )
}

export default Modal
