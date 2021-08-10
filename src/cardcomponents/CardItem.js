import React from 'react';
import { Card } from 'reactstrap';
import CardHeader from './CardHeader';

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
            readOnly: props.readOnly,
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

    changeEditMode = () => {
        const { editMode, headerTitle, bottomTitle, checked } = this.state;
        this.setState({
            editMode: !editMode,
            checked: checked ? false : checked,
            headerTemp: headerTitle,
            bottomTemp: bottomTitle,
        });
    };

    changeCheckbox = () => {
        this.setState({ checked: !this.state.checked });
        this.props.showCheck(this.props.id);
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
            <Card color={!this.state.checked ? 'success' : 'danger'} style={{ width: '14rem', margin: '25px' }}>
                <CardHeader
                    readOnly={this.props.readOnly}
                    checked={this.state.checked}
                    editMode={this.state.editMode}
                    bottomTitle={this.state.bottomTitle}
                    headerTitle={this.state.headerTitle}
                    bottomTemp={this.state.bottomTemp}
                    headerTemp={this.state.headerTemp}
                    changeCheckbox={this.changeCheckbox}
                    changeEditMode={this.changeEditMode}
                    submitHandler={this.submitHandler}
                    cancelHandler={this.cancelHandler}
                    titleChangeHandler={this.titleChangeHandler}
                    bottomChangeHandler={this.bottomChangeHandler}
                />
            </Card>
        );
    }
}

export default CardItem;
