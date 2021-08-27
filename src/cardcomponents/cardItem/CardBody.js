import React, { Component } from 'react';

class CardBody extends Component {
    render() {
        return (
            <div>
                <span className="text-white">
                    {this.props.editMode && !this.props.readOnly ? (
                        <textarea
                            type="text"
                            onChange={this.props.bottomChangeHandler}
                            value={this.props.bottomTemp}
                        ></textarea>
                    ) : (
                        <span>{this.props.bottomTitle}</span>
                    )}
                </span>
            </div>
        );
    }
}

export default CardBody;
