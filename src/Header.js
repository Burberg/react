import { Navbar } from 'reactstrap';
import React from 'react';

const AppHeader = (props) => {
    return (
        <Navbar className="justify-content-center" color="success">
            <span style={{ color: 'white', textAlign: 'center' }}> Тут у нас header</span>
        </Navbar>
    );
};
export default AppHeader;
