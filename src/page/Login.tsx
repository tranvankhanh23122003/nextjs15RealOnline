"use client";

import { useState } from "react";
import Auth_Components from "../components/Login/Auth_Components";

const Login = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!isLoginOpen && (
        <button
          onClick={handleOpenLogin}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
        >
          Mở đăng nhập
        </button>
      )}

      <Auth_Components isOpen={isLoginOpen} onClose={handleCloseLogin} />
    </div>
  );
};

export default Login;
