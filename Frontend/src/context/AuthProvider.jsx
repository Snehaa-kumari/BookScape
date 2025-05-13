import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Provider component
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook to use the context
export const useAuth = () => useContext(AuthContext);
