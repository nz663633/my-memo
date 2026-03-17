import './App.css'
import Header from './components/Header';
import Login from './components/Login';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

function App() {
  const idRef = useRef(2);
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

  return (
    <>
      <div className='App'>
        <div className='leftApp'>
          <Header />
          <Login />
          <Editor
            onCreate={onCreate} />
        </div>
        <div className='rightApp'>
          <List
            mockData={mockData}
            onDelete={onDelete} />
        </div>
      </div>
    </>
  )
}

export default App
