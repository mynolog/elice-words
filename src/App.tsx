import type { Word } from './types/word/WordTypes.ts'
import type { ModalFlagType } from './types/modal/ModalTypes.ts'
import { useState } from 'react'
import AppContainer from './components/partial/AppContainer.tsx'
import AppHeader from './components/partial/AppHeader.tsx'
import CommonInput from './components/common/input/CommonInput.tsx'
import WordList from './components/words/WordList.tsx'
import Modal from './components/modal/Modal.tsx'
import CreateWordModal from './components/modal/body/CreateWordModal.tsx'
import EditWordModal from './components/modal/body/EditWordModal.tsx'
import Toast from './components/toast/Toast.tsx'

function App() {
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [words, setWords] = useState<Word[]>([])
  const [modalFlag, setModalFlag] = useState<ModalFlagType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

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
  const handleOpenModal = (flag: ModalFlagType) => {
    setModalFlag(flag)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalFlag(null)
    setIsModalOpen(false)
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
        break
      case 'DELETE':
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
    setWords((prevState) => [...prevState, newWord])
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
          <EditWordModal handleCloseModal={handleCloseModal} />
        )}
        {modalFlag === 'DELETE' && <h1>Delete Modal</h1>}
      </Modal>
    </AppContainer>
  )
}

export default App
