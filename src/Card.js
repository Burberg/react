import React, { useState } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';

// import './Card.css';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const Block = (props) => {
    const [checked, setChecked] = useState(false); //check
    const [editMode, setEdit] = useState(false); // edit
    const [headerTitle, setHeaderTitle] = useState(props.header);
    const [headerTemp, setHeaderTemp] = useState('');
    const [bottomTitle, setBottomTitle] = useState(props.body);
    const [bottomTemp, setBottomTemp] = useState('');

    const titleChangeHandler = (event) => {
        setHeaderTemp(event.target.value);
    };

    const bottomChangeHandler = (event) => {
        setBottomTemp(event.target.value);
    };

    function changeCheckbox() {
        setChecked(!checked);
    }

    function changeEditMode() {
        setEdit(!editMode);
        if (checked) {
            setChecked(!checked);
        } else {
            setHeaderTemp(headerTitle);
            setBottomTemp(bottomTitle);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setEdit(false);
        setHeaderTitle(headerTemp);
        setBottomTitle(bottomTemp);
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        setEdit(false);
    };

    return (
        <React.Fragment>
            <Card style={{ width: '18rem' }} color={checked ? 'danger' : 'success'} fluid="md">
                <CardTitle>
                    <h1 className="text-white">
                        {editMode && !props.readOnly ? (
                            <input type="text" onChange={titleChangeHandler} value={headerTemp}></input>
                        ) : (
                            <span width="150px"> {headerTitle}</span>
                        )}
                    </h1>
                </CardTitle>
                <CardText>
                    <span>
                        {!props.readOnly && (
                            <span>
                                {editMode ? (
                                    <span>
                                        <AiOutlineCheck onClick={submitHandler} />
                                        <MdCancel onClick={cancelHandler} />
                                    </span>
                                ) : (
                                    <span>
                                        <HiPencil onClick={changeEditMode} />
                                        <input onChange={changeCheckbox} checked={checked} type="checkbox"></input>
                                    </span>
                                )}
                            </span>
                        )}
                    </span>
                    <span className="text-white">
                        {editMode && !props.readOnly ? (
                            <textarea type="text" onChange={bottomChangeHandler} value={bottomTemp}></textarea>
                        ) : (
                            <span> {bottomTitle}</span>
                        )}
                    </span>
                </CardText>
            </Card>
        </React.Fragment>
    );
};

export default Block;
