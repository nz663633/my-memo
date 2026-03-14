import { useState } from "react";

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
                <p></p>
            ))}
        </>
    )
}

export default List;