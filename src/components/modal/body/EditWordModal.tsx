import CommonButton from '../../common/button/CommonButton.tsx'
import CommonInput from '../../common/input/CommonInput.tsx'
import { ModalFlagType } from '../../../types/modal/ModalTypes.ts'
import { Word } from '../../../types/word/WordTypes.ts'
import { Dispatch, SetStateAction, useEffect } from 'react'

type EditWordModalProps = {
  handleCloseModal: () => void
  handleInputChange: (value: string, flag: ModalFlagType) => void
  modalFlag: ModalFlagType
  handleOpenToast: (message: string) => void
  currentWord: Word | undefined
  handleEditWord: (id: number, value: string) => void
  newInput: string
  setNewInput: Dispatch<SetStateAction<string>>
}

const EditWordModal = ({
  handleCloseModal,
  handleInputChange,
  modalFlag,
  handleOpenToast,
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

  const onClick = () => {
    if (newInput.trim() && currentWord) {
      handleEditWord(currentWord.id, newInput)
      handleOpenToast('✅ 성공적으로 수정되었습니다! 😀')
      handleCloseModal()
    } else {
      handleOpenToast('❌ 단어를 입력해주세요! 😅')
    }
  }

  const handleChange = (value: string) => {
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
          onChange={handleChange}
          placeholder="단어를 입력하세요."
        />
        <CommonButton width="w-full" onClick={onClick}>
          수정
        </CommonButton>
      </div>
    </div>
  )
}

export default EditWordModal
