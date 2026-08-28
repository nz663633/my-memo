import Item from "./Item.jsx";

const List = ({ mockData, onDelete, onUpdate }) => {
    return (
        <>
            {mockData.map((item) => (
                <Item
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </>
    )
}

export default List;