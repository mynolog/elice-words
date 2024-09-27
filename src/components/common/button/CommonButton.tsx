import { ReactNode } from 'react'

type CommonButtonProps = {
  children: ReactNode
}

const CommonButton = ({ children }: CommonButtonProps) => {
  return (
    <button
      className="bg-[#99B4BF] text-white font-semibold text-sm rounded p-2 transition duration-200 ease-in-out
  hover:bg-[#7A9DA0]
  active:scale-95"
    >
      {children}
    </button>
  )
}

export default CommonButton
