import classNames from 'classnames';
import React, { useState } from 'react';
import './Card.css';

const Card = () => {
    const [checked, setChecked] = useState(true);
    const Text = 'А вот здесь у нас заголовок';

    function changeCheckbox() {
        setChecked(!checked);
    }

    return (
        <div>
            <h1 className="tomato">
                {Text} <input type="checkbox" checked={checked} onChange={changeCheckbox} />
            </h1>
            <div className={classNames('description', { stylesR: checked, stylesG: !checked })}>
                <p>
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
};
export default Card;
