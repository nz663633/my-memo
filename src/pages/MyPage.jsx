import Header from '../components/Header';
import Editor from '../components/Editor';
import List from '../components/List';
import '../styles/Header.css';
import '../styles/Editor.css';
import '../styles/MyPage.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const idRef = useRef(2);
    const navigate = useNavigate();
    const [mockData, setMockData] = useState([
        {
            id: 1,
            title: '두 번째 메모',
            content: '이것은 두 번째 메모입니다.'
        },
        {
            id: 0,
            title: '첫 메모',
            content: '안녕하세요.'
        }
    ]);

    const onCreate = (title, content) => {
        const newMemo = {
            id: idRef.current,
            title,
            content
        };

        setMockData([newMemo, ...mockData]);
        idRef.current += 1;
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

    return (
        <>
            <div className='Page'>
                <div className='leftPage'>
                    <Header />
                    <button className="logout"
                        onClick={handleLogout}>로그아웃</button>
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
