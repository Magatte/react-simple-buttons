import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { font, colors, shape } from 'config/styles';
import { ButtonTypes, ButtonThemes } from '../config/buttonProperties'

const Wrapper = styled.button`
    ${font}
    ${colors}
    ${shape}
`;

const Button = (props) => {
    return (
        <Wrapper 
            onClick={props.onClick} 
            type={props.type} 
            theme={props.theme}
        >
            {props.label}
        </Wrapper>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(Object.values(ButtonTypes)),
    theme: PropTypes.oneOf(Object.values(ButtonThemes))
}

Button.defaultProps = {
    label: '',
    onClick: () => console.log('No click handler specified'),
    type: 'primary',
    theme: 'dark'
}

export default Button;