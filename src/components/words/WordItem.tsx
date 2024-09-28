import { ReactNode } from 'react'
import { Word } from '../../types/word/WordTypes.ts'

type WordItemProps = {
  word: Word
  bgColor?: string
  children: ReactNode
}

const WordItem = ({
  word,
  bgColor = 'bg-[#99B4BF]',
  children,
}: WordItemProps) => {
  return (
    <li
      className={`${bgColor} py-3 px-4 text-white rounded-md hover:bg-[#7A9A8E] transition duration-200 ease-in-out flex justify-between`}
      key={word.id + word.value}
    >
      <span>{word.value}</span>
      <div className="flex items-center justify-between gap-3">{children}</div>
    </li>
  )
}

export default WordItem
