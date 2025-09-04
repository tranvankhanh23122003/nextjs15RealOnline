"use client";
import { useState } from "react"
import Login_Components from "./Login_Components"
import SignUp_Components from "./SignUp_Components"

const Auth_Components = ({isOpen, onClose, onLoginSuccess}: {
  isOpen: boolean, 
  onClose: () => void,
  onLoginSuccess: (userData: { name: string; email: string }) => void
}) => {
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
      onLoginSuccess={onLoginSuccess}
    />
  )
}

export default Auth_Components 