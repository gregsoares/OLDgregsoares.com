import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../../Components/Modal/Modal';

test('expect to load modal with "HelloWorld" Text', () => {
    const { getByText } = render(<Modal isOpen={true} contentLabel="HelloWorld" id="testModal" />)
    const checkText = getByText('HelloWorld');
    expect(checkText).toBeInTheDocument()
})
