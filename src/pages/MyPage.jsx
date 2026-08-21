import Header from '../components/Header';
import Editor from '../components/Editor';
import List from '../components/List';
import '../styles/Header.css';
import '../styles/Editor.css';
import '../styles/MyPage.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const navigate = useNavigate();
    const [nick, setNick] = useState("");
    const [mockData, setMockData] = useState([]);

    const onCreate = async (title, content) => {
        const response = await fetch('/api/memos', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            return;
        }
        const data = await response.json();
        setMockData([data.memo, ...mockData]);
    };

    const onDelete = (targetId) => {
        // 지우고자하는 targetId가 아닌 
        // 나머지 item.id를 모아서 새로운 배열을 생성
        const filteredData = mockData.filter((item) => {
            return item.id !== targetId;
        });

        setMockData(filteredData);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST'
            });

            if (response.ok) {
                alert("로그아웃 성공");
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    }

    // 렌더링 이후 로그인 상태 확인 + 로그인 상태에서 메모 조회
    useEffect(() => {
        const checkLogin = async () => {
            const authResponse = await fetch('/api/auth/me', {
                method: 'GET'
            });

            if (!authResponse.ok) {
                navigate('/');
                return;
            }
            const getNick = await authResponse.json(); // 서버에서 데이터를 꺼내옴
            setNick(getNick.user.nick);
            alert(`${getNick.user.nick}님 로그인 완료!`);

            // 메모 조회
            const memoResponse = await fetch('/api/memos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!memoResponse.ok) {
                return;
            }
            const data = await memoResponse.json();
            setMockData(data.memos);
        }
        checkLogin();
    }, []);

    return (
        <>
            <div className='Page'>
                <div className='leftPage'>
                    <Header />
                    <div className='nickAndButton'>
                        <div>닉네임: {nick}</div>
                        <button className="logout"
                            onClick={handleLogout}>로그아웃</button>
                    </div>
                    <Editor onCreate={onCreate} />
                </div>
                <div className='rightPage'>
                    <List
                        mockData={mockData}
                        onDelete={onDelete} />
                </div>
            </div >
        </>
    )
};

export default MyPage;
