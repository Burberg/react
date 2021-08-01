import React, { useState } from 'react';
import CardList from './CardList';

const CardBasis = () => {
    function switchReadOnly() {
        setReadOnly(!readOnly);
    }
    const [readOnly, setReadOnly] = useState();
    return (
        <div style={{ marginTop: '25px' }}>
            <label>
                Только для чтения
                <input type="checkbox" onChange={switchReadOnly} checked={readOnly}></input>
            </label>
            <CardList readOnly={readOnly} />
        </div>
    );
};
export default CardBasis;
