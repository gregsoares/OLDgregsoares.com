import React from 'react';
import { shallow } from 'enzyme';
import IconCard from './IconCard';

describe('Renders IconCard without errors', () => {
  it('renders IconCard with no props', () => {
    const wrapper = shallow(<IconCard />);
    expect(wrapper);
  });
});
