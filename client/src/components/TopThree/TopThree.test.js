import React from 'react';
import ReactDOM from 'react-dom';
import TopThree from './TopThree';

it('renders TopThree with no errors', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopThree />, div);
  ReactDOM.unmountComponentAtNode(div);


});
