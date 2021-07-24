import React, { useState } from 'react';

import Card from './Card';

const cards = [
    { key: '1', header: '11', body: '2' },
    { key: '2', header: '11', body: '2' },
    { key: '3', header: '11', body: '2' },
    { key: '4', header: '11', body: '2' },
    { key: '5', header: '11', body: '2' },
    { key: '6', header: '11', body: '2' },
];

function Body() {
    const [readOnly, setRead] = useState(false);

    function change() {
        setRead(!readOnly);
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {cards.map((card) => (
                    <Card header={card.header} body={card.body} readOnly={readOnly} key={card.key} />
                ))}
            </div>
            <div>
                <label>
                    Только для чтения
                    <input type="checkbox" onChange={change} checked={readOnly}></input>
                </label>
            </div>
        </div>
    );
}

export default Body;
