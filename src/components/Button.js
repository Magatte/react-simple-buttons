import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { font, primaryColors, shape } from 'config/styles';
import { ButtonTypes, ButtonSizes, ButtonThemes } from '../constants/buttonProperties'

const Wrapper = styled.button`
    ${font}
    ${primaryColors}
    ${shape}
`;

const Button = ({label, onClick}) => {
    return <Wrapper onClick={onClick}>{label}</Wrapper>;
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(Object.values()),
    size: PropTypes.oneOf(Object.values()),
    theme: PropTypes.oneOf(Object.values)
}

Button.defaultProps = {
    label: '',
    onClick: () => console.log('No click handler specified'),
    type: ButtonTypes.PRIMARY,
    size: ButtonSizes.MEDIUM,
    theme: ButtonThemes.DARK
}

export default Button;