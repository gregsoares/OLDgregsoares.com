import React from 'react';
import { shallow } from 'enzyme';
import TopThree from './TopThree';

describe('Renders TopThree without errors', () => {
  it('renders TopThree with no props', () => {
    const wrapper = shallow(<TopThree />);
    expect(wrapper);
  });
});
