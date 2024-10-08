import { ReactNode } from 'react'

type CommonButtonProps = {
  children: ReactNode
  width?: string
  margin?: string
  bgColor?: string
  hoverColor?: string
  onClick?: () => void
}

const CommonButton = ({
  children,
  width = '',
  margin = '',
  bgColor = 'bg-[#2D4B73]',
  hoverColor = 'bg-[#253C59]',
  onClick = () => {},
}: CommonButtonProps) => {
  return (
    <button
      className={`${width} ${margin} ${bgColor} text-white font-semibold text-sm rounded px-5 py-3 transition duration-200 ease-in-out
  hover:${hoverColor}
  active:scale-95`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CommonButton
