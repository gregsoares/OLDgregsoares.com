import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav';

describe('Renders TopNav without errors', () => {
  const wrapper = shallow(<TopNav />);
  it('renders TopNav without crashing', () => {
    expect(wrapper);
  });
  
});
