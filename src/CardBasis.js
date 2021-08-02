import React, { useState } from 'react';
import CardList from './CardList';
import Checkbox from './UI/Checkbox';

const CardBasis = () => {
    function switchReadOnly() {
        setReadOnly(!readOnly);
    }
    const [readOnly, setReadOnly] = useState();
    return (
        <div style={{ marginTop: '25px' }}>
            <div style={{ display: 'flex', width: '20px;' }}>
                Только для чтения
                <Checkbox type="checkbox" onChange={switchReadOnly} checked={readOnly} />
            </div>
            <CardList readOnly={readOnly} />
        </div>
    );
};
export default CardBasis;
