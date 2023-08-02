import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

//object for user
const User = {
  userEmail: "",
  userPassword: "",
};

// Custom hook to access the AuthContext
const useAuthContext = () => {
    return useContext(AuthContext);
  };

  //AuthProvider that wrap the app component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(User);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
