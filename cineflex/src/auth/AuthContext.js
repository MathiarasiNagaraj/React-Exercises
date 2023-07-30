import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const User = {
  userEmail: "",
  userPassword: "",
};

// Custom hook to access the AuthContext
const useAuthContext = () => {
    return useContext(AuthContext);
  };

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(User);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
