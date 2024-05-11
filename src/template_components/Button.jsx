import React from 'react';
import './Button.css';
import './style.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    render() {
        return (
            <button id={this.props.id} className={this.props.className + " button " + this.state.type}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;