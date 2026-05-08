import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MyPage from '../pages/MyPage';
import RegisterPage from '../pages/RegisterPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/myPage" element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;