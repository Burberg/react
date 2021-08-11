import React from 'react';
import Checkbox from './Common/Components/Checkbox';
import CardList from './cardcomponents/CardList';

class CardBasis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readOnly: false,
        };
    }

    switchReadOnly = () => {
        this.setState({ readOnly: !this.state.readOnly });
    };

    render() {
        return (
            <div style={{ marginTop: '25px' }}>
                <div style={{ display: 'flex' }}>
                    Только для чтения
                    <Checkbox type="checkbox" onChange={this.switchReadOnly} checked={this.state.readOnly} />
                </div>

                <CardList readOnly={this.state.readOnly} showCards={this.showCards} />
            </div>
        );
    }
}
export default CardBasis;
