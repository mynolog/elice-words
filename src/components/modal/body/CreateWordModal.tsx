import { useState } from 'react'
import CommonButton from '../../common/button/CommonButton.tsx'
import CommonInput from '../../common/input/CommonInput.tsx'

type CreateWordModalProps = {
  handleCloseModal?: () => void
}

const CreateWordModal = ({
  handleCloseModal = () => {},
}: CreateWordModalProps) => {
  const [value, setValue] = useState('')
  const handleInputChange = (value: string) => {
    const trimmedValue = value.trimEnd()
    if (trimmedValue !== '') {
      setValue(trimmedValue)
    } else {
      setValue('')
    }
  }

  const handeModalClose = () => {
    handleCloseModal()
    setValue('')
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
          value={value}
          onChange={handleInputChange}
          placeholder="단어를 입력하세요."
        />
        <CommonButton width="w-full" value={value}>
          등록
        </CommonButton>
      </div>
    </div>
  )
}

export default CreateWordModal
