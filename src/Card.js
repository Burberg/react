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
    const [test, setTest] = useState(true);

    const titleChangeHandler = (event) => {
        setHeaderTemp(event.target.value);
    };

    const bottomChangeHandler = (event) => {
        setBottomTemp(event.target.value);
    };

    function changeCheckbox() {
        setChecked(!checked);
    }

    function changeTest() {
        setTest(!test);

        if (!test) {
            setEdit(false);
        }
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
        <Card style={{ width: '14rem' }} color={checked ? 'danger' : 'success'} fluid="md">
            <CardTitle>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <h1 className="text-white">
                            {editMode && !props.readOnly ? (
                                <input
                                    style={{ width: '80%' }}
                                    type="text"
                                    onChange={titleChangeHandler}
                                    value={headerTemp}
                                ></input>
                            ) : (
                                <span> {headerTitle}</span>
                            )}
                        </h1>
                    </div>
                    <div>
                        {!props.readOnly && (
                            <span>
                                {editMode ? (
                                    <span style={{ display: 'flex' }}>
                                        <AiOutlineCheck onClick={submitHandler} />
                                        <MdCancel onClick={cancelHandler} />
                                    </span>
                                ) : (
                                    <span>
                                        <HiPencil onClick={changeEditMode} />
                                    </span>
                                )}
                            </span>
                        )}

                        {!editMode && (
                            <span>
                                <input onChange={changeCheckbox} checked={checked} type="checkbox"></input>
                            </span>
                        )}
                    </div>
                </div>
            </CardTitle>
            <CardText>
                <span className="text-white">
                    {editMode && !props.readOnly ? (
                        <textarea type="text" onChange={bottomChangeHandler} value={bottomTemp}></textarea>
                    ) : (
                        <span> {bottomTitle}</span>
                    )}
                </span>
                <input type="checkbox" onChange={changeTest} checked={test}></input>
            </CardText>
        </Card>
    );
};

export default Block;
