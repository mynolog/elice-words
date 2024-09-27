import { Word } from '../../types/word/WordTypes.ts'
type WordItemProps = {
  word: Word
  bgColor?: string
}

const WordItem = ({ word, bgColor = 'bg-[#99B4BF]' }: WordItemProps) => {
  return (
    <li
      className={`${bgColor} p-2 text-white rounded-md hover:bg-[#7A9A8E] transition duration-200 ease-in-out`}
      key={word.id + word.value}
    >
      {word.value}
    </li>
  )
}

export default WordItem
