import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

{/* children = Products */ }
const Private = ({ children }) => {

    const { adminToken } = useSelector((state) => state.authReducer);
    return adminToken ? children : <Navigate to="/auth/admin-login" />

}

export default Private;
