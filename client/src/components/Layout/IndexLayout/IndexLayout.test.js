import React from 'react';
import ReactDOM from 'react-dom';
import IndexLayout from './IndexLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndexLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
})