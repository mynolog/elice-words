import CommonButton from '../../common/button/CommonButton.tsx'
import CommonInput from '../../common/input/CommonInput.tsx'
import { ModalFlagType } from '../../../types/modal/ModalTypes.ts'
import { Word } from '../../../types/word/WordTypes.ts'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Variant } from '../../toast/Toast.tsx'

type EditWordModalProps = {
  handleCloseModal: () => void
  handleInputChange: (value: string, flag: ModalFlagType) => void
  modalFlag: ModalFlagType
  handleShowToast: (message: string, variant: Variant) => void
  currentWord: Word | undefined
  handleEditWord: (id: number, value: string) => void
  newInput: string
  setNewInput: Dispatch<SetStateAction<string>>
}

const EditWordModal = ({
  handleCloseModal,
  handleInputChange,
  modalFlag,
  handleShowToast,
  currentWord,
  handleEditWord,
  newInput,
  setNewInput,
}: EditWordModalProps) => {
  useEffect(() => {
    setNewInput(currentWord?.value || '')
  }, [currentWord, setNewInput])

  const handeModalClose = () => {
    handleCloseModal()
  }

  const onEditWord = () => {
    if (newInput.trim() && currentWord) {
      handleEditWord(currentWord.id, newInput)
      handleShowToast('✅ 성공적으로 수정되었습니다! 😀', 'update')
      handleCloseModal()
    } else {
      handleShowToast('❌ 단어를 입력해주세요! 😅', 'warning')
    }
  }

  const onChangeWord = (value: string) => {
    setNewInput(value)
    handleInputChange(value, modalFlag)
  }

  return (
    <div className="p-3 flex flex-col justify-center">
      <CommonButton
        margin="ml-auto"
        bgColor="bg-gray-300"
        hoverColor="bg-gray-900"
        onClick={handeModalClose}
      >
        닫기
      </CommonButton>
      <div>
        <CommonInput
          value={newInput}
          onChange={onChangeWord}
          placeholder="단어를 입력하세요."
        />
        <CommonButton width="w-full" onClick={onEditWord}>
          수정
        </CommonButton>
      </div>
    </div>
  )
}

export default EditWordModal
