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
    { id: '8', header: 'Прив', body: 'чёдел?' },
];

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readOnly: props.readOnly,
        };
    }

    change = () => {
        this.setState({ readOnly: !this.state.readOnly });
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.readOnly && nextProps.readOnly) {
            return { readOnly: true };
        } else {
            return { readOnly: false };
        }
    }

    render() {
        return (
            <div style={{ marginTop: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {cards.map((card) => (
                        <CardItem {...card} readOnly={this.state.readOnly} key={card.id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default CardList;
