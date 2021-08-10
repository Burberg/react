import React, { Component } from 'react';
import CardBody from './CardBody';
import { CardTitle } from 'reactstrap';
import { HiPencil } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

class CardHeader extends Component {
    render() {
        return (
            <div>
                <CardTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h1 className="text-white" style={{ wordBreak: 'break-word' }}>
                                {this.props.editMode && !this.props.readOnly ? (
                                    <input
                                        style={{ width: '80%' }}
                                        type="text"
                                        onChange={this.props.titleChangeHandler}
                                        value={this.props.headerTemp}
                                    ></input>
                                ) : (
                                    <span>{this.props.headerTitle}</span>
                                )}
                            </h1>
                        </div>
                        <div style={{ display: 'flex' }}>
                            {!this.props.readOnly && (
                                <span>
                                    {this.props.editMode ? (
                                        <span style={{ display: 'flex' }}>
                                            <AiOutlineCheck onClick={this.props.submitHandler} />
                                            <MdCancel onClick={this.props.cancelHandler} />
                                        </span>
                                    ) : (
                                        <span>
                                            <HiPencil onClick={this.props.changeEditMode} />
                                        </span>
                                    )}
                                </span>
                            )}
                            {!this.props.editMode && (
                                <span>
                                    <input
                                        type="checkbox"
                                        onChange={this.props.changeCheckbox}
                                        checked={this.props.checked}
                                    ></input>
                                </span>
                            )}
                        </div>
                    </div>
                </CardTitle>
                <CardBody
                    readOnly={this.props.readOnly}
                    editMode={this.props.editMode}
                    bottomTitle={this.props.bottomTitle}
                    bottomTemp={this.props.bottomTemp}
                    bottomChangeHandler={this.props.bottomChangeHandler}
                />
            </div>
        );
    }
}

export default CardHeader;
