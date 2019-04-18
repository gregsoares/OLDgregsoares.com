import React from 'react';
import { shallow } from 'enzyme';

import CardSection from './CardSection';

describe('Renders CardSection without errors', () => {
  it('Renders CardSection (Basic)', () => {
    const wrapper = shallow(<CardSection />);
    expect(wrapper);
  });

});
