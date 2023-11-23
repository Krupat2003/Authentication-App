import { useState, useEffect } from "react";
import { useAuthLoginMutation } from "../../store/services/authService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../store/reducers/authReducers";

const AdminLogin = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleInputs = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };


    // req send backend 
    const [login, response] = useAuthLoginMutation();                                   //give response from backend
    console.log('my response', response);
    const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];  //display errors 
    const adminLoginFunction = e => {
        e.preventDefault();
        login(state);                                                                   //creact function and pass this function replace in  useAuthLoginMutation()
    };

    const dispatch = useDispatch();


    useEffect(() => {
        if (response.isSuccess) {
            localStorage.setItem('admin-token', response?.data?.token);             //tow pre= 1 (key, value) 
            dispatch(setAdminToken(response?.data?.token));
            navigate('/dashboard/home');                                              //navigate home page
        }
    }, [response.isSuccess]);

    return (
        <div className="bg-black1 h-screen flex justify-center items-center">
            <form className="bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 rounded"
                onSubmit={adminLoginFunction}>

                <h3 className="mb-4 text-white capitalize text-lg">
                    login form
                </h3>


                {errors.length > 0 && errors.map((error, key) => (
                    <div key={key} >
                        <p className="alert-danger">{error.msg}</p>
                    </div>
                ))}

                <div className="mb-4 mt-4">
                    <input type="email" name="email" onChange={handleInputs} value={state.email} className="w-full bg-black p-4 rounded outline-none text-white" placeholder="Enter email..." />
                </div>

                {/* password start */}
                
                {/* <div className="mb-4">
                    <input type="password" name="password" onChange={handleInputs} value={state.password} 
                    className="w-full bg-black p-4 rounded outline-none text-white" placeholder="Enter password..." />
                </div> */}

                <div className="mb-4 space-y-4">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="passwordField"
                                name="password"
                                placeholder="Enter Password"
                                onChange={handleInputs}
                                value={state.password}
                                className="w-full bg-black p-4 rounded outline-none text-white "
                            />
                            <div
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 p-4 pr-5"
                            >
                                {showPassword ? (
                                    <i class="bi bi-eye-fill text-white"></i>
                                ) : (
                                    <i class="bi bi-eye-slash-fill text-white"></i>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* end  */}

                    <div className="mb-4" >
                        <input type="submit" value={response.isLoading ? 'Loading...' : 'sing in'}
                            className="bg-btn1  w-full p-4 rounded text-white uppercase font-semibold cursor-pointer" />
                    </div>
                </div>

            </form>
        </div>

    )
}

export default AdminLogin;
