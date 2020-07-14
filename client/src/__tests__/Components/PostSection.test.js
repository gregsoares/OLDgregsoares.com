import React from 'react';
import { render } from '@testing-library/react';
import { PostSection } from '../../Components/PostSection/PostSection';

test('expect getByTestId="PostSectionContainer', () => {
    const { getByTestId } = render(<PostSection />)
    const checkId = getByTestId("PostSectionContainer");
    expect(checkId).toBeInTheDocument(); 
})
