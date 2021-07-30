import React from 'react';
import CardList from './CardList';

class Body extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <CardList />
            </div>
        );
    }
}

export default Body;
