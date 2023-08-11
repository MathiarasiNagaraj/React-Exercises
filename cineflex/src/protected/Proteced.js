import { Navigate} from "react-router-dom";
const Protected = ({ isLoggedIn,children,redirectionURL}) => {
    if (!isLoggedIn) {
    return <Navigate to={redirectionURL} replace />;
  }
    return children;
};
export default Protected;