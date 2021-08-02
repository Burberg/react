import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import Checkbox from './UI/Checkbox';

class CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            editMode: false,
            headerTitle: props.header,
            headerTemp: '',
            bottomTitle: props.body,
            bottomTemp: '',
        };
    }

    handleCheckboxChange = (event) => {
        this.setState({ checked: event.target.checked });
    };

    titleChangeHandler = (event) => {
        this.setState({ headerTemp: event.target.value });
    };

    bottomChangeHandler = (event) => {
        this.setState({ bottomTemp: event.target.value });
    };

    changeCheckbox = () => {
        this.setState({ checked: !this.state.checked });
    };

    changeEditMode = () => {
        const { editMode, headerTitle, bottomTitle, checked } = this.state;
        this.setState({
            editMode: !editMode,
            checked: checked ? false : checked,
            headerTemp: headerTitle,
            bottomTemp: bottomTitle,
        });
    };

    cancelHandler = (event) => {
        event.preventDefault();
        this.setState({ editMode: false });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ editMode: false, bottomTitle: this.state.bottomTemp, headerTitle: this.state.headerTemp });
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.readOnly && nextProps.readOnly) {
            return { editMode: false };
        } else {
            return null;
        }
    }

    render() {
        return (
            <Card style={{ width: '14rem', margin: '25px' }} color={this.state.checked ? 'danger' : 'success'}>
                <CardTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h1 className="text-white" style={{ wordBreak: 'break-word' }}>
                                {this.state.editMode && !this.props.readOnly ? (
                                    <input
                                        style={{ width: '80%' }}
                                        type="text"
                                        onChange={this.titleChangeHandler}
                                        value={this.state.headerTemp}
                                    ></input>
                                ) : (
                                    <span>{this.state.headerTitle}</span>
                                )}
                            </h1>
                        </div>
                        <div style={{ display: 'flex' }}>
                            {!this.props.readOnly && (
                                <span>
                                    {this.state.editMode ? (
                                        <span style={{ display: 'flex' }}>
                                            <AiOutlineCheck onClick={this.submitHandler} />
                                            <MdCancel onClick={this.cancelHandler} />
                                        </span>
                                    ) : (
                                        <span>
                                            <HiPencil onClick={this.changeEditMode} />
                                        </span>
                                    )}
                                </span>
                            )}
                            {!this.state.editMode && (
                                <span>
                                    {/* <input
                                        type="checkbox"
                                        onChange={this.changeCheckbox}
                                        checked={this.state.checked}
                                    ></input> */}
                                    <Checkbox
                                        type="checkbox"
                                        onChange={this.changeCheckbox}
                                        checked={this.state.checked}
                                    />
                                </span>
                            )}
                        </div>
                    </div>
                </CardTitle>
                <CardText>
                    <span className="text-white">
                        {this.state.editMode && !this.props.readOnly ? (
                            <textarea
                                type="text"
                                onChange={this.bottomChangeHandler}
                                value={this.state.bottomTemp}
                            ></textarea>
                        ) : (
                            <span> {this.state.bottomTitle}</span>
                        )}
                    </span>
                </CardText>
            </Card>
        );
    }
}

export default CardItem;
