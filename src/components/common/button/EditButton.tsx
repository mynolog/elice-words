import { AiOutlineEdit } from 'react-icons/ai'
import { ModalFlagType } from '../../../types/modal/ModalTypes.ts'

type EditButtonProps = {
  handleOpenModal: (flag: ModalFlagType, wordId: number) => void
  wordId: number
}

const EditButton = ({ handleOpenModal, wordId }: EditButtonProps) => {
  return (
    <AiOutlineEdit
      className="text-2xl cursor-pointer"
      onClick={() => handleOpenModal('EDIT', wordId)}
    />
  )
}

export default EditButton
