type ToastProps = {
  message: string
}

const Toast = ({ message }: ToastProps) => {
  return (
    <div className="z-[99] fixed top-5 right-5 bg-gray-800 text-lg text-white py-2.5 px-5 rounded-lg shadow-lg transition duration-500 ease-in opacity-100">
      <span>{message}</span>
    </div>
  )
}

export default Toast
