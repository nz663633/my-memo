import { useState } from "react";
import Item from "./Item.jsx";

const List = () => {
    const mockData = [
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
    ];

    return (
        <>
            {mockData.map((item) => (
                <Item
                key={item.id} 
                title={item.title}
                content={item.content}/>
            ))}
        </>
    )
}

export default List;