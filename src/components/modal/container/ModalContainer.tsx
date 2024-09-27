import { ReactNode } from 'react'

type ModalContainerProps = {
  children: ReactNode
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <div className="fixed top-0 h-full right-0 left-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-40 rounded-lg">
      {children}
    </div>
  )
}

export default ModalContainer
