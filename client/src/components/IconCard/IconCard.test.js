import React from 'react';
import { shallow } from 'enzyme';
import IconCard from './IconCard';

describe('Renders TopThree without errors', () => {
  it('renders TopThree with no props', () => {
    const wrapper = shallow(<IconCard />);
    expect(wrapper);
  });
});
