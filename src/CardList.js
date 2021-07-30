import React from 'react';
import CardItem from './CardItem';

const cards = [{ id: '1', header: 'Прив', body: 'чёдел?' }];

class CardList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            readOnly: false,
        };
    }
    change = () => {
        this.setState({ readOnly: !this.state.readOnly });
    };

    render() {
        return (
            <div style={{ marginTop: '25px' }}>
                <label>
                    Только для чтения
                    <input type="checkbox" onChange={this.change} checked={this.state.readOnly}></input>
                </label>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {cards.map((card) => (
                        <CardItem header={card.header} body={card.body} readOnly={this.state.readOnly} key={card.id} />
                    ))}
                </div>
            </div>
        );
    }
}
export default CardList;
