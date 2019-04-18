import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeSection from './TreeSection';

describe('Renders TreeSection without errors', () => {
  it('renders TopThree with no errors', () => {
    const wrapper = shallow(<TreeSection />);
    expect(wrapper);

  });
    
});


