import classNames from 'classnames';
import React, { useState } from 'react';
import './Card.css';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const Card = () => {
    const sampleText =
        'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.';
    const [checked, setChecked] = useState(false); //check
    const [editMode, setEdit] = useState(false); // edit
    const [enteredTitle, setEnteredTitle] = useState('');
    const [temp, setTemp] = useState('Тут у нас заголовок');
    const [bottomTitle, setBottomEnteredTitle] = useState('');
    const [bottomTemp, setBottomTemp] = useState(sampleText);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const bottomChangeHandler = (event) => {
        setBottomEnteredTitle(event.target.value);
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
        const expenseData = {
            title: enteredTitle,
            bottom: bottomTitle,
        };
        setTemp(enteredTitle);
        setBottomTemp(bottomTitle);
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        setEdit(false);
        setEnteredTitle('');
        setBottomEnteredTitle('');
    };
    return (
        <div>
            <h1 className="tomato">{temp}</h1>
            <div class="buttonHolder">
                <button onClick={changeEditMode} style={editMode ? { display: 'none' } : { display: 'block' }}>
                    <HiPencil />
                </button>
                <button
                    onClick={submitHandler}
                    type="submit"
                    style={editMode ? { display: 'block' } : { display: 'none' }}
                >
                    <AiOutlineCheck />
                </button>
                <button onClick={cancelHandler} style={editMode ? { display: 'block' } : { display: 'none' }}>
                    <MdCancel />
                </button>
                <input
                    type="checkbox"
                    style={editMode ? { display: 'none' } : { display: 'block' }}
                    checked={checked}
                    onChange={changeCheckbox}
                />
                <input
                    type="text"
                    onChange={titleChangeHandler}
                    value={enteredTitle}
                    style={editMode ? { display: 'block' } : { display: 'none' }}
                ></input>
            </div>
            <div className={classNames('description', { stylesR: checked })}>
                <p>{bottomTemp}</p>
            </div>
            <div className="bottomButtonHolder">
                <input
                    type="text"
                    onChange={bottomChangeHandler}
                    value={bottomTitle}
                    style={editMode ? { display: 'block' } : { display: 'none' }}
                ></input>
            </div>
        </div>
    );
};
export default Card;
