import React from 'react';
import { shallow } from 'enzyme';
import TopHeader from './TopHeader';

describe('Renders TopHeader without errors', () => {
  it('renders TopHeaders without crashing', () => {
    const wrapper = shallow(<TopHeader title={'TestTitle'} text={'someText'} />);
    expect(wrapper);

  });
});

