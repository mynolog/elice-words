import { AiOutlineDelete } from 'react-icons/ai'
import { ModalFlagType } from '../../../types/modal/ModalTypes.ts'

type DeleteButtonProps = {
  handleOpenModal: (flag: ModalFlagType, wordId: number) => void
  wordId: number
}

const DeleteButton = ({ handleOpenModal, wordId }: DeleteButtonProps) => {
  return (
    <AiOutlineDelete
      className="text-2xl cursor-pointer"
      onClick={() => handleOpenModal('DELETE', wordId)}
    />
  )
}

export default DeleteButton
