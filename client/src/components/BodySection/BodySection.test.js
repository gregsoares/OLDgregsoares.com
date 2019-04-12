import React from 'react';
import ReactDOM from 'react-dom';
import BodySection from './BodySection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BodySection />, div);
  ReactDOM.unmountComponentAtNode(div);
});