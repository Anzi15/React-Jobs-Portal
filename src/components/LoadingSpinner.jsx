import { DotLoader } from "react-spinners"

const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 z-50 bg-inherit flex items-center justify-center min-h-[50vh]">
    <DotLoader
    color="#6366F1"
    loading
    speedMultiplier={2}
    />
    </div>
  )
}

export default LoadingSpinner