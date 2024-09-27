import CommonButton from '../common/button/CommonButton.tsx'

const AppHeader = () => {
  return (
    <header className="flex justify-between items-center w-full p-4">
      <h1 className="text-3xl font-extrabold text-[#2D4B73]">나만의 단어장</h1>
      <CommonButton>단어 추가</CommonButton>
    </header>
  )
}

export default AppHeader
