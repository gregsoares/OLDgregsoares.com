import React from 'react'
import { render, screen } from '@testing-library/react'
import { Topnav } from './Topnav';
import '@testing-library/jest-dom/extend-expect';

test('Expects testId=Topnav', () => {
  render(<Topnav />)

  expect(screen.getByTestId('Topnav')).toBeInTheDocument()
})

test('Expects Text="Full Stack"', () => {
  render(<Topnav />)

  expect(screen.getByText('Full Stack')).toBeTruthy()
})