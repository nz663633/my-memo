import { useState } from "react";
import Item from "./Item.jsx";

const List = ({ mockData, onDelete }) => {
    return (
        <>
            {mockData.map((item) => (
                <Item
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    onDelete={onDelete}
                />
            ))}
        </>
    )
}

export default List;