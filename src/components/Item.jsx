import { useState } from 'react';
import '../styles/Item.css';

const Item = ({ title, content, onDelete, id, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    const [editContent, setEditContent] = useState(content);

    const handleUpdate = async () => {
        const result = await onUpdate(id, editTitle, editContent);

        if (result) {
            setIsEditing(false);
        }
    }

    return (
        <>
            {isEditing ? (
                // 수정모드
                <>
                    <div className='itemContainer'>
                        <input className='titleItem' value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)} />
                        <textarea className='contentItem' value={editContent}
                            onChange={(e) => setEditContent(e.target.value)} />
                        <div className='Buttons'>
                            <button className='deleteBtn' onClick={() => onDelete(id)}>삭제</button>
                            <button className='updateBtn' onClick={handleUpdate}>저장</button>
                        </div>
                    </div>
                </>
            ) : (
                // 일반모드
                <div className='itemContainer'>
                    <p className='titleItem'>{title}</p>
                    <div className='contentItem'>
                        <h5>{content}</h5>
                    </div>
                    <div className='Buttons'>
                        <button className='deleteBtn' onClick={() => onDelete(id)}>삭제</button>
                        <button className='updateBtn' onClick={() => setIsEditing(true)}>수정</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Item;