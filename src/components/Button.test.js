import { render, getByText, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from 'components/Button';

describe('Button', () => {
    test('Should display text', () => {
        const { container } = render(<Button label='We salute you' />);

        getByText(container, 'We salute you');
    })

    test('Should handle click events', () => {
        const onClickMock = jest.fn();
        const { container } = render(
            <Button label='Click me, maybe ?' onClick={onClickMock} />
        );

        const component = container.firstChild;

        fireEvent.click(component);

        expect(onClickMock).toHaveBeenCalled();
    })

    test('Should make text uppercase', () => {
        const { container } = render(<Button label='We salute you' />);
        const component = getByText(container, 'We salute you');

        expect(component).toHaveStyleRule('text-transform', 'uppercase');
    })

    test('Should have default green background', () => {
        const { container } = render(<Button label='We salute you' />);
        const component = getByText(container, 'We salute you');

        expect(component).toHaveStyleRule('background', '#5cdb95');
    })

    test('Should have explicit green background when type is primary', () => {
        const { container } = render(<Button label='We salute you' type='primary' />);
        const component = getByText(container, 'We salute you');

        expect(component).toHaveStyleRule('background', '#5cdb95');
    })

    test('Should have explicit red background when type is secondary', () => {
        const { container } = render(<Button label='We salute you' type='secondary' />);
        const component =  getByText(container, 'We salute you');

        expect(component).toHaveStyleRule('background', '#d86262')
    })

    test('Should have dark blue color when default type', () => {
        const { container } = render(<Button label='We salute you' />);
        const component = getByText(container, 'We salute you');

        expect(component).toHaveStyleRule('color', '#05385b');
    })

    test('Should have dark blue color when type is primary', () => {
        const { container } = render(<Button label='We salute you' type='primary' />);
        const component = getByText(container, 'We salute you');

        expect(component).toHaveStyleRule('color', '#05385b');
    })

    test('Should have white color when type is secondary', () => {
        const { container } = render(<Button label='We salute you' type='secondary' />);
        const component =  getByText(container, 'We salute you');

        expect(component).toHaveStyleRule('color', '#fff')
    })
});
