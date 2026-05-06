import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MyPage from '../pages/MyPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/MyPage" element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;