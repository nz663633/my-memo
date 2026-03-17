import '../styles/Item.css';

const Item = ({ title, content, onDelete, id }) => {
    return (
        <>
            <div className='itemContainer'>
                <p className='titleItem'>{title}</p>
                <div className='contentItem'>
                    <h5>{content}</h5>
                </div>
                <button onClick={() => onDelete(id)}>삭제</button>
            </div>
        </>
    )
}

export default Item;