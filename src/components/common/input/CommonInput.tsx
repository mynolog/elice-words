import type { ChangeEvent } from 'react'
import { ModalFlagType } from '../../../types/modal/ModalTypes.ts'

type CommonInputProps = {
  placeholder?: string
  value: string
  onChange: (value: string, flag: ModalFlagType) => void
  modalFlag?: ModalFlagType
}

const CommonInput = ({
  placeholder = '',
  value,
  onChange,
  modalFlag = null,
}: CommonInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, modalFlag)
  }
  return (
    <input
      className="w-full border-b-2 border-gray-500 my-2 px-4 py-2 rounded-t-none outline-none text-xl font-semibold"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}

export default CommonInput
