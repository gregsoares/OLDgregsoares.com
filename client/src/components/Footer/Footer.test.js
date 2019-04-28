import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Renders Footer without errors', () => {
  it('renders Footer with no props', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper);
  });
});
