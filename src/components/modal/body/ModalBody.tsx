import { useState } from 'react'
import CommonButton from '../../common/button/CommonButton.tsx'
import CommonInput from '../../common/input/CommonInput.tsx'

const ModalBody = () => {
  const [value, setValue] = useState('')
  const handleInputChange = (value: string) => {
    const trimmedValue = value.trimEnd()
    if (trimmedValue !== '') {
      setValue(trimmedValue)
    } else {
      setValue('')
    }
  }

  return (
    <div className="bg-white rounded-md shadow-md p-3 max-w-[600px] w-full h-48 flex flex-col justify-center">
      <CommonButton
        margin="ml-auto"
        bgColor="bg-gray-300"
        hoverColor="bg-gray-900"
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

export default ModalBody
