import '../styles/Item.css';

const Item = ({ title, content }) => {
    return (
        <>
            <div className='itemContainer'>
                <p className='titleItem'>{title}</p>
                <div className='contentItem'>
                    <h5>{content}</h5>
                </div>
            </div>
        </>
    )
}

export default Item;