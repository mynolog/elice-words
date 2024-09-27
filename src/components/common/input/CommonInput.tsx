import type { ChangeEvent } from 'react'

type CommonInputProps = {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

const CommonInput = ({
  placeholder = '',
  value,
  onChange,
}: CommonInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
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
