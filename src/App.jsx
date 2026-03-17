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
      id: 0,
      title: '첫 메모',
      content: '안녕하세요.'
    },
    {
      id: 1,
      title: '두 번째 메모',
      content: '이것은 두 번째 메모입니다.'
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

  return (
    <>
      <div className='App'>
        <div className='leftApp'>
          <Header />
          <Login />
          <Editor onCreate={onCreate} />
        </div>
        <div className='rightApp'>
          <List mockData={mockData} />
        </div>
      </div>
    </>
  )
}

export default App
