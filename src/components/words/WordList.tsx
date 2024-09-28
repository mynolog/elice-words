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
          {filteredWords.length !== 0 ? (
            filteredWords.map((word) => (
              <WordItem key={word.id + word.value} word={word} />
            ))
          ) : (
            <li className="text-xl flex items-center justify-center w-full">
              ❌ 키워드와 일치하는 단어가 없습니다.
            </li>
          )}
        </>
      ) : (
        <>
          {words.length !== 0 ? (
            words.map((word) => (
              <WordItem key={word.id + word.value} word={word} />
            ))
          ) : (
            <li className="text-xl flex items-center justify-center w-full">
              📝 단어를 추가하여 나만의 단어장을 완성해보세요!
            </li>
          )}
        </>
      )}
    </ul>
  )
}

export default WordList
