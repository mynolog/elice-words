import type { Word } from './types/word/WordTypes.ts'
import { useState } from 'react'
import AppContainer from './components/partial/AppContainer.tsx'
import AppHeader from './components/partial/AppHeader.tsx'
import CommonInput from './components/common/input/CommonInput.tsx'
import WordList from './components/words/WordList.tsx'
// import HorizontalRule from './components/common/hr/HorizontalRule.tsx'

function App() {
  // const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [words, setWords] = useState<Word[]>([
    { id: 1, value: 'aaa' },
    { id: 2, value: 'bbb' },
    { id: 3, value: 'ccc' },
  ])

  const handleInputChange = (value: string) => {
    const trimmedValue = value.trimEnd()
    if (trimmedValue !== '') {
      setSearchTerm(trimmedValue)
    } else {
      setSearchTerm('')
    }
  }

  const filteredWords = words.filter((word: Word) => {
    return word.value.includes(searchTerm)
  })

  return (
    <AppContainer>
      <AppHeader />
      <CommonInput
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="단어를 입력하세요."
      />
      <WordList
        searchTerm={searchTerm}
        words={words}
        filteredWords={filteredWords}
      />
    </AppContainer>
  )
}

export default App
