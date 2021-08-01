import React from 'react';
import CardItem from './CardItem';

const cards = [
    { id: '1', header: 'Прив', body: 'чёдел?' },
    { id: '2', header: 'Прив', body: 'чёдел?' },
    { id: '3', header: 'Прив', body: 'чёдел?' },
    { id: '4', header: 'Прив', body: 'чёдел?' },
    { id: '5', header: 'Прив', body: 'чёдел?' },
    { id: '6', header: 'Прив', body: 'чёдел?' },
    { id: '7', header: 'Прив', body: 'чёдел?' },
    { id: '8', header: 'Привет', body: 'чёдел?' },
];

const CardList = (props) => {
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {cards.map((card) => (
                    <CardItem {...card} readOnly={props.readOnly} key={card.id} />
                ))}
            </div>
        </div>
    );
};
export default CardList;
