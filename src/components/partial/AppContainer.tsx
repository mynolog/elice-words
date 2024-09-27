import { ReactNode } from 'react'

type AppContainerProps = {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className="h-full max-w-2xl m-auto px-7 py-4 border border-gray-200 shadow-2xl">
      {children}
    </div>
  )
}

export default AppContainer
