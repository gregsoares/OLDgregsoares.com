import React from 'react';
import ReactDOM from 'react-dom';
import CardSection from './CardSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});