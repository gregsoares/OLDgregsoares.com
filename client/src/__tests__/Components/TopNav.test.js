import React from 'react';
import { render, screen } from '@testing-library/react';
import { Topnav } from '../../Components/Topnav/Topnav';

import { findByTestAttr } from "../../testUtils";

test('Renders Topnav', () => {
  const { getByText } = render(<Topnav />);
  const textCheck = getByText('GregSoares.com');
  expect(textCheck).toBeInTheDocument();
});