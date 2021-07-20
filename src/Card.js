import React, { useState } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';

// import './Card.css';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const sampleText =
    'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.';

const Block = (props) => {
    const [checked, setChecked] = useState(false); //check
    const [editMode, setEdit] = useState(false); // edit
    const [headerTitle, setHeaderTitle] = useState('Тут у нас заголовок');
    const [headerTemp, setHeaderTemp] = useState('');
    const [bottomTitle, setBottomTitle] = useState(sampleText);
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
                        {editMode ? (
                            <input type="text" onChange={titleChangeHandler} value={headerTemp}></input>
                        ) : (
                            <span width="150px"> {headerTitle}</span>
                        )}
                    </h1>
                </CardTitle>
                <CardText>
                    {editMode ? (
                        <span>
                            <AiOutlineCheck onClick={submitHandler} />
                            <MdCancel onClick={cancelHandler} />
                        </span>
                    ) : (
                        <span>
                            <HiPencil onClick={changeEditMode} />
                            <input
                                onClick={changeCheckbox}
                                checked={checked}
                                onChange={changeCheckbox}
                                type="checkbox"
                            ></input>
                        </span>
                    )}
                    {!editMode && <span className="text-white"> {bottomTitle}</span>}
                    {editMode && <textarea type="text" onChange={bottomChangeHandler} value={bottomTemp}></textarea>}
                </CardText>
            </Card>
        </React.Fragment>
    );
};

export default Block;
