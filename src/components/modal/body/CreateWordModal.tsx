import CommonButton from '../../common/button/CommonButton.tsx'
import CommonInput from '../../common/input/CommonInput.tsx'
import { ModalFlagType } from '../../../types/modal/ModalTypes.ts'

type CreateWordModalProps = {
  handleCloseModal?: () => void
  input: string
  handleInputChange: (value: string, flag: ModalFlagType) => void
  modalFlag: ModalFlagType
  handleCreateWord: (value: string) => void
  handleOpenToast: (message: string) => void
}

const CreateWordModal = ({
  handleCloseModal = () => {},
  input,
  handleInputChange,
  modalFlag,
  handleCreateWord,
  handleOpenToast,
}: CreateWordModalProps) => {
  const handeModalClose = () => {
    handleCloseModal()
  }

  const onCreateWord = () => {
    if (input.trim()) {
      handleCreateWord(input)
      handleOpenToast('✅ 성공적으로 추가되었습니다! 😀')
      handleCloseModal()
    } else {
      handleOpenToast('❌ 단어를 입력해주세요! 😅')
    }
  }

  return (
    <div className="p-3 flex flex-col justify-center">
      <CommonButton
        margin="ml-auto"
        bgColor="bg-gray-400"
        hoverColor="bg-gray-900"
        onClick={handeModalClose}
      >
        닫기
      </CommonButton>
      <div>
        <CommonInput
          value={input}
          onChange={(input) => handleInputChange(input, modalFlag)}
          placeholder="단어를 입력하세요."
        />
        <CommonButton width="w-full" onClick={onCreateWord}>
          등록
        </CommonButton>
      </div>
    </div>
  )
}

export default CreateWordModal
