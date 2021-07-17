import React, { useState } from 'react';

const text = 'А вот здесь у нас заголовок';
const styles = {
    backgroundColor: 'teal',
    color: 'white',
    width: '250px',
};
const stylesG = {
    backgroundColor: 'green',
};
const stylesR = {
    backgroundColor: 'red',
};

const Card = () => {
    const [checked, setChecked] = useState(true);
    function chengeCheckbox() {
        setChecked(!checked);
    }
    return (
        <div style={styles}>
            <h2>
                {text} <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
            </h2>

            <div style={checked ? stylesG : stylesR}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
};
export default Card;
