import React, { useState } from 'react';
import Checkbox from './common/components/Checkbox';
import CardList from './cardcomponents/CardList';

const CardBasis = () => {
    const [readOnly, setReadOnly] = useState(false);

    function switchReadOnly() {
        setReadOnly(!readOnly);
    }

    return (
        <div style={{ marginTop: '25px' }}>
            <div style={{ display: 'flex' }}>
                Только для чтения
                <Checkbox type="checkbox" onChange={switchReadOnly} checked={readOnly} />
            </div>
            <CardList readOnly={readOnly} />
        </div>
    );
};

export default CardBasis;
