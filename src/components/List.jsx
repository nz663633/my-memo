import { useState } from "react";
import Item from "./Item.jsx";

const List = ({ mockData }) => {
    return (
        <>
            {mockData.map((item) => (
                <Item
                    key={item.id}
                    title={item.title}
                    content={item.content} />
            ))}
        </>
    )
}

export default List;