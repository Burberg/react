import React from 'react';
import CardItem from '../cardElements/CardItem';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idsArr: [],
            cards: [
                { id: '1', header: '1', body: 'Здесь и подавно ничего нет' },
                { id: '2', header: '2', body: 'Здесь и подавно ничего нет' },
                { id: '3', header: '3', body: 'Здесь и подавно ничего нет' },
                { id: '4', header: '4', body: 'Здесь и подавно ничего нет' },
                { id: '5', header: '5', body: 'Здесь и подавно ничего нет' },
                { id: '6', header: '6', body: 'Здесь и подавно ничего нет' },
                { id: '7', header: '7', body: 'Здесь и подавно ничего нет' },
                { id: '8', header: '8', body: 'Здесь и подавно ничего нет' },
                { id: '9', header: '9', body: 'Здесь и подавно ничего нет' },
                { id: '10', header: '10', body: 'Здесь и подавно ничего нет' },
            ],
        };
    }

    showCheck = (props) => {
        let num = Number(props);
        let i = this.state.idsArr.indexOf(num);

        if (i < 0) {
            this.setState({ idsArr: [...this.state.idsArr, num] });
        } else {
            this.state.idsArr.splice(i, 1);
            this.setState({ idsArr: this.state.idsArr });
        }
    };
    removeCards = () => {
        for (let i = 0; i <= this.state.cards.length; i++) {
            delete this.state.cards[this.state.idsArr[i] - 1];
        }
        this.setState({ idsArr: [] });
    };

    render() {
        return (
            <div>
                <button style={{ marginLeft: '25px', marginTop: '15px' }} onClick={this.removeCards}>
                    Удалить
                </button>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.cards.map((card) => (
                        <CardItem {...card} readOnly={this.props.readOnly} key={card.id} showCheck={this.showCheck} />
                    ))}
                </div>
            </div>
        );
    }
}
export default CardList;
