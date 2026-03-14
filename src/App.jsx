import './App.css'
import Header from './components/Header';
import Login from './components/Login';
import Editor from './components/Editor';
import List from './components/List';

function App() {
  return (
    <>
      <div className='App'>
        <div className='leftApp'>
          <Header />
          <Login />
          <Editor />
        </div>
        <div className='rightApp'>
          <List />
        </div>
      </div>
    </>
  )
}

export default App
