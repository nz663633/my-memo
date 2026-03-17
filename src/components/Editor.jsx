import '../styles/Editor.css';
import { use, useState } from 'react';

const Editor = ({ onCreate }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    };

    const onContentChange = (e) => {
        setContent(e.target.value);
        console.log(e.target.value);
    };

    const onBtnClick = () => {
        onCreate(title, content);
        setTitle("");
        setContent("");
    };

    return (
        <>
            <div className='editorContainer'>
                <div className='titleClass'>
                    <input
                        type='text'
                        value={title}
                        onChange={onTitleChange}
                        placeholder='제목을 입력하세요.' />
                </div>
                <div className='contentClass'>
                    <textarea
                        value={content}
                        onChange={onContentChange} />
                </div>
                <button
                    type="summit"
                    onClick={onBtnClick}>업로드</button>
            </div>
        </>
    )
}

export default Editor;