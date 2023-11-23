import { useDispatch } from "react-redux";
// import { logout } from "../store/reducers/authReducers";
import { logout } from "../store/reducers/authReducers";

const AdminNav = ({ openSidebar }) => {

    const dispatch = useDispatch();

    const adminLogout = () => {
        dispatch(logout());         //call 
    }

    return (
        <nav className="fixed left-0  right-0 ">
            <div className="bg-gray-800 w-full flex justify-between sm:justify-end items-center  p-4">

                <i className="bi bi-filter-left text-white text-2xl cursor-pointer sm:hidden block"
                    onClick={openSidebar}></i>

                <button to="/" className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize "
                    onClick={adminLogout} >
                    logout
                </button>

            </div>

        </nav>
    )
}

export default AdminNav;



