import { useState } from "react"
import Login_Components from "./Login_Components"
import SignUp_Components from "./SignUp_Components"

const Auth_Components = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  const [isSignUpMode, setIsSignUpMode] = useState(false)

  const handleSwitchToSignUp = () => {
    setIsSignUpMode(true)
  }

  const handleSwitchToLogin = () => {
    setIsSignUpMode(false)
  }

  const handleClose = () => {
    setIsSignUpMode(false)
    onClose()
  }

  if (isSignUpMode) {
    return (
      <SignUp_Components 
        isOpen={isOpen} 
        onClose={handleClose} 
        onSwitchToLogin={handleSwitchToLogin}
      />
    )
  }

  return (
    <Login_Components 
      isOpen={isOpen} 
      onClose={handleClose} 
      onSwitchToSignUp={handleSwitchToSignUp}
    />
  )
}

export default Auth_Components 