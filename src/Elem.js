import React, { useState } from 'react';

const Elem = () => {
    const [editMode, setEdit] = useState(false); // edit

    function change() {
        setEdit(true);
    }
    return <div>{!editMode && <button onClick={change}>123</button>}</div>;
};
export default Elem;
