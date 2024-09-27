import { ReactNode, MouseEvent } from 'react'

type ModalContainerProps = {
  children: ReactNode
  isModalOpen: boolean
  handleCloseModal: () => void
}

const ModalContainer = ({
  children,
  isModalOpen,
  handleCloseModal,
}: ModalContainerProps) => {
  const handleModalClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    handleCloseModal()
  }

  return (
    <div
      className={`${isModalOpen ? 'flex items-center justify-center' : 'hidden'} fixed top-0 h-full right-0 left-0 z-50 bg-gray-800 bg-opacity-40 rounded-lg`}
      onClick={handleModalClose}
    >
      {children}
    </div>
  )
}

export default ModalContainer
