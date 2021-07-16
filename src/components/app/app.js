import React from 'react'; //= 1

import AppHeader from '../app-header'; // = 2
import Something from '../app-block';
// import Smth from '../next-folder';

const App = () => {
    // = 3
    const style = {
        width: '250px',
        backgroundColor: 'grey',
        color: 'white',
        margin: '25px',
    };
    return (
        <div style={style}>
            <AppHeader />
            <Something />
        </div>
    );
};

export default App;
