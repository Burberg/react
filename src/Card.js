import classNames from 'classnames';
import React, { useState } from 'react';
import './Card.css';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const sampleText =
    'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.';

const Card = () => {
    const [checked, setChecked] = useState(false); //check
    const [editMode, setEdit] = useState(false); // edit
    const [headerTitle, setHeaderTitle] = useState('');
    const [headerTemp, setHeaderTemp] = useState('Тут у нас заголовок');
    const [bottomTitle, setBottomTitle] = useState('');
    const [bottomTemp, setBottomTemp] = useState(sampleText);

    const titleChangeHandler = (event) => {
        setHeaderTitle(event.target.value);
    };

    const bottomChangeHandler = (event) => {
        setBottomTitle(event.target.value);
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
        setHeaderTemp(headerTitle);
        setBottomTemp(bottomTitle);
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        setEdit(false);
        setHeaderTitle('');
        setBottomTitle('');
    };
    return (
        <div>
            <h1 className="tomato">
                {!editMode && <p> {headerTemp}</p>}
                {editMode && <input type="text" onChange={titleChangeHandler} value={headerTitle}></input>}
            </h1>
            <div class="buttonHolder">
                {!editMode && <HiPencil onClick={changeEditMode} />}
                {editMode && <AiOutlineCheck onClick={submitHandler} />}
                {editMode && <MdCancel onClick={cancelHandler} />}
                {!editMode && (
                    <input onClick={changeCheckbox} checked={checked} onChange={changeCheckbox} type="checkbox"></input>
                )}
            </div>
            <div className={classNames('description', { stylesR: checked })}>{!editMode && <p> {bottomTemp}</p>}</div>
            <div className="bottomButtonHolder">
                {editMode && <input type="text" onChange={bottomChangeHandler} value={bottomTitle}></input>}
            </div>
        </div>
    );
};
export default Card;
