import { ReactNode } from 'react'

type CommonButtonProps = {
  children: ReactNode
}

const CommonButton = ({ children }: CommonButtonProps) => {
  return (
    <button
      className="bg-[#2D4B73] text-white font-semibold text-sm rounded p-2 transition duration-200 ease-in-out
  hover:bg-[#253C59]
  active:scale-95"
    >
      {children}
    </button>
  )
}

export default CommonButton
