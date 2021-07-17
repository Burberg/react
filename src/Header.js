import React from 'react';

const Styles = {
    backgroundColor: 'tomato',
    textAlign: 'center',
    color: 'white',
};
const AppHeader = () => {
    return (
        <header style={Styles}>
            <h1>Здесь у нас header</h1>
        </header>
    );
};

export default AppHeader;
