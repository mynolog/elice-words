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
  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div
      className={`${isModalOpen ? 'flex items-center justify-center' : 'hidden'} fixed top-0 h-full right-0 left-0 z-50 bg-gray-800 bg-opacity-40 rounded-lg`}
      onClick={handleModalClose}
    >
      <div
        className="bg-white rounded-md shadow-md p-3 max-w-[600px] w-full h-48 flex flex-col justify-center"
        onClick={handleContentClick}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalContainer
