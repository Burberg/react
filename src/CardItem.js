import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

class CardItem extends React.Component {
    constructor(props) {
        super();
        this.state = {
            checked: false,
            editMode: false,
            headerTitle: props.header,
            headerTemp: '',
            bottomTitle: props.body,
            bottomTemp: '',
        };
    }

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
        this.setState({ editMode: !this.state.editMode });

        if (this.state.checked) {
            this.setState({ checked: false });
            this.setState({ headerTemp: this.state.headerTitle });
            this.setState({ bottomTemp: this.state.bottomTitle });
        } else {
            this.setState({ headerTemp: this.state.headerTitle });
            this.setState({ bottomTemp: this.state.bottomTitle });
        }
    };

    cancelHandler = (event) => {
        event.preventDefault();
        this.setState({ editMode: false });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ editMode: false });

        this.setState({ bottomTitle: this.state.bottomTemp });
        this.setState({ headerTitle: this.state.headerTemp });
    };
    componentDidUpdate(prevProps) {
        if (this.props.readOnly !== prevProps.readOnly) {
            this.setState({ editMode: false });
        }
    }

    render() {
        return (
            <Card style={{ width: '14rem' }} color={this.state.checked ? 'danger' : 'success'} fluid="md">
                <CardTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h1 className="text-white">
                                {this.state.editMode && !this.props.readOnly ? (
                                    <input
                                        style={{ width: '80%' }}
                                        type="text"
                                        onChange={this.titleChangeHandler}
                                        value={this.state.headerTemp}
                                    ></input>
                                ) : (
                                    <span> {this.state.headerTitle}</span>
                                )}
                            </h1>
                        </div>
                        <div>
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
                                    <input
                                        type="checkbox"
                                        onChange={this.changeCheckbox}
                                        checked={this.state.checked}
                                    ></input>
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
