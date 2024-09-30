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
import DeleteWordModal from './components/modal/modalBody/DeleteWordModal.tsx'
import Toast, { Variant } from './components/toast/Toast.tsx'
import useToast from './hooks/useToast.tsx'
import { fireStoreWordService } from './service/fireStoreWordService.ts'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import { db } from './config/firebaseConfig.ts'

function App() {
  const [input, setInput] = useState('')
  const [newInput, setNewInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [words, setWords] = useState<Word[]>([])
  const [currentWordId, setCurrentWordId] = useState<number | null>(null)
  const [modalFlag, setModalFlag] = useState<ModalFlagType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { toasts, addToast } = useToast()

  useEffect(() => {
    // TODO: useFectch Hook으로 리펙토링
    const fetchWords = async () => {
      const q = query(collection(db, 'words'), orderBy('id', 'asc'))
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          ...(doc.data() as Word),
          docId: doc.id,
        }))
        setWords(newData)
      })
      return () => unsubscribe()
    }
    // onSnapshot으로 대체
    //   try {
    //     const data = await fireStoreWordService.getWordsCollection()
    //     setWords(data ?? [])
    //   } catch (e) {
    //     console.error('fetchWords', e)
    //   }
    // }
    fetchWords()
  }, [])

  useEffect(() => {
    console.log('words updated...')
  }, [words])

  const filteredWords = words.filter((word: Word) => {
    return word.value.includes(searchTerm)
  })

  // Toast 핸들러
  const handleShowToast = (message: string, variant: Variant) => {
    addToast(message, variant)
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

  const handleCreateWord = async (value: string) => {
    if (value === '') {
      return
    }
    const newWord = { id: Date.now(), value }
    await fireStoreWordService.createWord(newWord)
    setIsModalOpen(false)
  }

  const handleEditWord = async (id: number, value: string) => {
    const targetWord = words.find((word) => word.id === id)
    if (!targetWord) {
      return
    }
    await fireStoreWordService.updateWordById(value, targetWord.docId!)
    setIsModalOpen(false)
  }

  const handleDeleteWord = async (id: number) => {
    const targetWord = words.find((word) => word.id === id)
    if (!targetWord) {
      return
    }
    await fireStoreWordService.deleteWordById(targetWord.docId!)
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

      <div className="fixed top-5 right-5">
        {toasts.map(({ id, message, variant }, index) => (
          <Toast
            key={id}
            message={message}
            variant={variant}
            style={{ marginTop: `${index * 60}px` }}
          />
        ))}
      </div>

      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
        {modalFlag === 'CREATE' && (
          <CreateWordModal
            handleCloseModal={handleCloseModal}
            input={input}
            handleInputChange={handleInputChange}
            modalFlag={modalFlag}
            handleCreateWord={handleCreateWord}
            handleShowToast={handleShowToast}
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
            handleShowToast={handleShowToast}
          />
        )}
        {modalFlag === 'DELETE' && (
          <DeleteWordModal
            handleCloseModal={handleCloseModal}
            currentWord={words.find((word) => word.id === currentWordId)}
            handleDeleteWord={handleDeleteWord}
            handleShowToast={handleShowToast}
          />
        )}
      </Modal>
    </AppContainer>
  )
}

export default App
