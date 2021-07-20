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
        <div>
            <Card style={{ width: '18rem' }} color={checked ? 'danger' : 'success'} fluid="md">
                <CardTitle tag="h1">
                    <h1 className="text-white">
                        {editMode ? (
                            <input type="text" onChange={titleChangeHandler} value={headerTemp}></input>
                        ) : (
                            <p width="150px"> {headerTitle}</p>
                        )}
                    </h1>
                </CardTitle>
                <CardText>
                    <div class="buttonHolder">
                        {!editMode && <HiPencil onClick={changeEditMode} />}
                        {editMode && <AiOutlineCheck onClick={submitHandler} />}
                        {editMode && <MdCancel onClick={cancelHandler} />}
                        {!editMode && (
                            <input
                                onClick={changeCheckbox}
                                checked={checked}
                                onChange={changeCheckbox}
                                type="checkbox"
                            ></input>
                        )}
                    </div>
                    <div>{!editMode && <p className="text-white"> {bottomTitle}</p>}</div>
                    <div className="bottomButtonHolder">
                        {editMode && (
                            <textarea type="text" onChange={bottomChangeHandler} value={bottomTemp}></textarea>
                        )}
                    </div>
                </CardText>
            </Card>
        </div>
    );
};

export default Block;
