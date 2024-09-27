import { ReactNode } from 'react'

type CommonButtonProps = {
  children: ReactNode
  width?: string
  margin?: string
  bgColor?: string
  hoverColor?: string
  value?: string
  onClick?: () => void
}

const CommonButton = ({
  children,
  width = '',
  margin = '',
  bgColor = 'bg-[#2D4B73]',
  hoverColor = 'bg-[#253C59]',
  value = '',
  onClick = () => {},
}: CommonButtonProps) => {
  console.log(value)
  return (
    <button
      className={`${width} ${margin} ${bgColor} text-white font-semibold text-sm rounded px-5 py-3 transition duration-200 ease-in-out
  hover:${hoverColor}
  active:scale-95 disabled:bg-gray-400`}
      onClick={onClick}
      // disabled={!value}
    >
      {children}
    </button>
  )
}

export default CommonButton
