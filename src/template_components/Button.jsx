import React from 'react';
import './Button.css';
import './style.css';

class Button extends React.Component {
    render() {
        const { className, text, type, ...otherProps } = this.props;

        return (
            <button className={`${className} button ${type}`} {...otherProps}>
                {text}
            </button>
        );
    }
}

export default Button;