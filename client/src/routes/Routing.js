import AdminLogin from '../screen/auth/AdminLogin';
import RegisterForm from '../screen/auth/Registretion.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screen/dashboard/Home.js';
import Private from './Private.js';
import Public from './Public.js';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='auth'>
                    <Route path='register' element={<RegisterForm />} />
                </Route>

                <Route path='auth'>
                    <Route path='admin-login' element={<Public><AdminLogin /></Public>} />
                </Route>

                <Route path='dashboard'>
                    <Route path='home' element={<Private><Home /></Private>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
