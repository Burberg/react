import React from 'react';
import CardItem from './CardItem/index';

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                { id: '1', header: '1', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '2', header: '2', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '3', header: '3', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '4', header: '4', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '5', header: '5', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '6', header: '6', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '7', header: '7', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '8', header: '8', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '9', header: '9', body: 'Здесь и подавно ничего нет', checked: false },
                { id: '10', header: '10', body: 'Здесь и подавно ничего нет', checked: false },
            ],
        };
    }

    onCheck = (id) => {
        this.setState({
            cards: this.state.cards.map((c) => (id === c.id ? { ...c, checked: !c.checked } : c)),
        });
    };

    removeCards = () => {
        let cards = this.state.cards.filter((c) => !c.checked);
        this.setState({ cards });
    };

    render() {
        return (
            <div>
                <button style={{ marginLeft: '25px', marginTop: '15px' }} onClick={this.removeCards}>
                    Удалить
                </button>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.cards.map((card) => (
                        <CardItem {...card} readOnly={this.props.readOnly} key={card.id} onCheck={this.onCheck} />
                    ))}
                </div>
            </div>
        );
    }
}
export default CardList;
