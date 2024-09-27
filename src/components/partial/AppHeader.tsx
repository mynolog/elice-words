import CommonButton from '../common/button/CommonButton.tsx'
import { ModalFlagType } from '../../types/modal/ModalTypes.ts'

type AppHeaderProps = {
  handleOpenModal: (flag: ModalFlagType) => void
}

const AppHeader = ({ handleOpenModal }: AppHeaderProps) => {
  return (
    <header className="flex justify-between items-center w-full p-4">
      <h1 className="text-3xl font-extrabold text-[#2D4B73]">나만의 단어장</h1>
      <CommonButton onClick={() => handleOpenModal('CREATE')}>
        단어 추가
      </CommonButton>
    </header>
  )
}

export default AppHeader
