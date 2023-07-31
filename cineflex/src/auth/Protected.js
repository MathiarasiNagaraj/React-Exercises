import { Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
const Protected = ({ children }) => {
  const { user } = useAuthContext();
console.log(user)
  if (!user.userEmail) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export { Protected };
