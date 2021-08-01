import React from 'react';
import CardList from './CardList';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
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
                <CardList readOnly={this.state.readOnly} />
            </div>
        );
    }
}

export default Checkbox;
