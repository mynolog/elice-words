import type { Word } from './types/word/WordTypes.ts'
import type { ModalFlagType } from './types/modal/ModalTypes.ts'
import { useState, useEffect } from 'react'
import AppContainer from './components/partial/AppContainer.tsx'
import AppHeader from './components/partial/AppHeader.tsx'
import CommonInput from './components/common/input/CommonInput.tsx'
import WordList from './components/words/WordList.tsx'
import Modal from './components/modal/Modal.tsx'
import CreateWordModal from './components/modal/modalBody/CreateWordModal.tsx'
import EditWordModal from './components/modal/modalBody/EditWordModal.tsx'
import Toast from './components/toast/Toast.tsx'
import DeleteWordModal from './components/modal/modalBody/DeleteWordModal.tsx'

function App() {
  const [input, setInput] = useState('')
  const [newInput, setNewInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [words, setWords] = useState<Word[]>([])
  const [currentWordId, setCurrentWordId] = useState<number | null>(null)
  const [modalFlag, setModalFlag] = useState<ModalFlagType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
    const localWords = localStorage.getItem('words')
    if (localWords) {
      setWords(JSON.parse(localWords))
    } else {
      setWords([])
    }
  }, [])

  const filteredWords = words.filter((word: Word) => {
    return word.value.includes(searchTerm)
  })

  // Toast 핸들러
  const handleOpenToast = (message: string) => {
    setToastMessage(message)
    setTimeout(() => {
      setToastMessage(null)
    }, 4000)
  }

  // Modal 핸들러
  const handleOpenModal = (flag: ModalFlagType, id: number | null = null) => {
    setModalFlag(flag)
    setCurrentWordId(id)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalFlag(null)
    setIsModalOpen(false)
    setSearchTerm('')
    setInput('')
  }

  // Change 핸들러
  const handleInputChange = (value: string, flag: ModalFlagType) => {
    const trimmedValue = value.trimEnd()

    switch (flag) {
      case null:
        setSearchTerm(trimmedValue || '')
        break
      case 'CREATE':
        setInput(trimmedValue || '')
        break
      case 'EDIT':
        setNewInput(trimmedValue || '')
        break
      default:
        return
    }
  }

  const handleCreateWord = (value: string) => {
    // TODO: 빈 문자열일때 등록 x
    if (value === '') {
      return
    }
    const newWord = { id: Date.now(), value }
    setWords((prevState) => {
      const updatedWords = [...prevState, newWord]
      localStorage.setItem('words', JSON.stringify(updatedWords))
      return updatedWords
    })
    setIsModalOpen(false)
  }

  const handleEditWord = (id: number, value: string) => {
    setWords((prevWords) => {
      const updatedWords = prevWords.map((word) =>
        word.id === id ? { ...word, value } : word,
      )
      localStorage.setItem('words', JSON.stringify(updatedWords))
      return updatedWords
    })
    setIsModalOpen(false)
  }

  const handleDeleteWord = (id: number) => {
    setWords((prevWords) => {
      const updatedWords = prevWords.filter((word) => word.id !== id)
      localStorage.setItem('words', JSON.stringify(updatedWords))
      return updatedWords
    })
    setIsModalOpen(false)
  }

  return (
    <AppContainer>
      <AppHeader handleOpenModal={handleOpenModal} />
      <CommonInput
        value={searchTerm}
        onChange={handleInputChange}
        modalFlag={modalFlag}
        placeholder="찾고 싶은 키워드를 입력하세요."
      />
      <WordList
        searchTerm={searchTerm}
        words={words}
        filteredWords={filteredWords}
        handleOpenModal={handleOpenModal}
      />

      {toastMessage && <Toast message={toastMessage} />}

      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        {modalFlag === 'CREATE' && (
          <CreateWordModal
            handleCloseModal={handleCloseModal}
            input={input}
            handleInputChange={handleInputChange}
            modalFlag={modalFlag}
            handleCreateWord={handleCreateWord}
            handleOpenToast={handleOpenToast}
          />
        )}
        {modalFlag === 'EDIT' && (
          <EditWordModal
            newInput={newInput}
            setNewInput={setNewInput}
            handleInputChange={handleInputChange}
            handleCloseModal={handleCloseModal}
            modalFlag={modalFlag}
            currentWord={words.find((word) => word.id === currentWordId)}
            handleEditWord={handleEditWord}
            handleOpenToast={handleOpenToast}
          />
        )}
        {modalFlag === 'DELETE' && (
          <DeleteWordModal
            handleCloseModal={handleCloseModal}
            currentWord={words.find((word) => word.id === currentWordId)}
            handleDeleteWord={handleDeleteWord}
            handleOpenToast={handleOpenToast}
          />
        )}
      </Modal>
    </AppContainer>
  )
}

export default App
