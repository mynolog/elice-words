import { Word } from '../../types/word/WordTypes.ts'
import WordItem from './WordItem'

type WordListProps = {
  searchTerm: string
  words: Word[]
  filteredWords?: Word[]
}

const WordList = ({ searchTerm, words, filteredWords = [] }: WordListProps) => {
  return (
    <ul className="w-full flex flex-col gap-3 mt-5">
      {searchTerm !== '' ? (
        <>
          {filteredWords.map((word) => (
            <WordItem key={word.id + word.value} word={word} />
          ))}
        </>
      ) : (
        <>
          {words?.map((word: Word) => (
            <WordItem key={word.id + word.value} word={word} />
          ))}
        </>
      )}
    </ul>
  )
}

export default WordList
