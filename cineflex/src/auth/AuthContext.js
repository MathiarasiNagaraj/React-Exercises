import { createContext, useContext, useEffect, useState } from "react";
import { users } from "../services/data";

const AuthContext = createContext();

//object for user
const User = {
  userEmail: "",
  userPassword: "",
  userName: "",
};
const islogged = localStorage.getItem("islogged");

// Custom hook to access the AuthContext
const useAuthContext = () => {
  return useContext(AuthContext);
};

//AuthProvider that wrap the app component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(User);

  useEffect(() => {
    if (islogged) {
    
      const name = localStorage.getItem("userName");
      const foundUser = users.find((user) => user.name == name);
      if (foundUser) {
        setUser(() => ({
          userEmail: foundUser.userEmail,
          userPassword: foundUser.userPassword,
          userName: foundUser.name,
        }));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
