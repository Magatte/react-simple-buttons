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
});
