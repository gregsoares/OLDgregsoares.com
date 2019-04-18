import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav';

describe('Renders TopNav without errors', () => {
  it('renders TopNav without crashing', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper);
  });
  
});
