import type { Word } from './types/word/WordTypes.ts'
import { useState } from 'react'
import AppContainer from './components/partial/AppContainer.tsx'
import AppHeader from './components/partial/AppHeader.tsx'
import CommonInput from './components/common/input/CommonInput.tsx'
// import HorizontalRule from './components/common/hr/HorizontalRule.tsx'

function App() {
  const [input, setInput] = useState('')
  const [words, setWords] = useState<Word[]>([
    { id: 1, value: 'aaa' },
    { id: 2, value: 'bbb' },
    { id: 3, value: 'ccc' },
  ])

  const handleInputChange = (value: string) => {
    const trimmedValue = value.trimEnd()
    if (trimmedValue !== '') {
      setInput(trimmedValue)
    } else {
      setInput('')
    }
  }

  return (
    <AppContainer>
      <AppHeader />
      {/*<HorizontalRule />*/}
      <CommonInput
        value={input}
        onChange={handleInputChange}
        placeholder="단어를 입력하세요."
      />
      {/*<HorizontalRule />*/}
      <ul>{words?.map((word: Word) => <li key={word.id}>{word.value}</li>)}</ul>
    </AppContainer>
  )
}

export default App
