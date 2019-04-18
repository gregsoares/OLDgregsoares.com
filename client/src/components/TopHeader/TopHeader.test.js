import React from 'react';
import ReactDOM from 'react-dom';
import TopHeader from './TopHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
