import React from 'react';
const AppHeader = () => {
    const Styles = {
        backgroundColor: 'tomato',
        textAlign: 'center',
        color: 'white',
    };
    return (
        <header style={Styles}>
            <h1>Здесь у нас header</h1>
        </header>
    );
};

export default AppHeader;
