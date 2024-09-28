import type { ModalFlagType } from '../../../types/modal/ModalTypes.ts'
import type { Word } from '../../../types/word/WordTypes.ts'
import CommonButton from '../../common/button/CommonButton.tsx'

type DeleteWordModalProps = {
  handleCloseModal: () => void
  modalFlag: ModalFlagType
  currentWord: Word | undefined
  handleDeleteWord: (id: number) => void
  handleOpenToast: (message: string) => void
}

const DeleteWordModal = ({
  handleCloseModal,
  modalFlag,
  currentWord,
  handleDeleteWord,
  handleOpenToast,
}: DeleteWordModalProps) => {
  const handeModalClose = () => {
    handleCloseModal()
  }

  const onClick = () => {
    if (currentWord) {
      handleDeleteWord(currentWord.id)
      handleOpenToast('✅ 성공적으로 삭제되었습니다! 😀')
      handleCloseModal()
    }
  }
  return (
    <div className="p-3 flex flex-col justify-center items-center w-full gap-3">
      <h3 className="text-2xl">{currentWord?.value}</h3>
      <span className="text-xl">정말 삭제하시겠습니까?</span>
      <div className="flex justify-center items-center w-full gap-3">
        <CommonButton onClick={onClick}>확인</CommonButton>
        <CommonButton onClick={handeModalClose}>취소</CommonButton>
      </div>
    </div>
  )
}

export default DeleteWordModal
