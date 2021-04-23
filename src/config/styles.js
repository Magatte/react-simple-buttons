import { css } from '@emotion/react';
import { StyleProperties, TypeToStyle } from '../config/styleProperties';

const documentStyleObject = document.documentElement.style;

CSSStyleDeclaration.prototype.setProperties = function(properties) {
    for (let property in properties) {
        let key = property;
        let value = properties[property];

        this.setProperty(key, value);
    }
}

documentStyleObject
.setProperties(StyleProperties);

export const font = css`
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 4px;
`;

export const shape = props => css`
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
`;

export const colors = props => css`
    background: ${documentStyleObject.getPropertyValue(TypeToStyle[props.type]['background'])};
    color: ${documentStyleObject.getPropertyValue(TypeToStyle[props.type]['color'])};
`;