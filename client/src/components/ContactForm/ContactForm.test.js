import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

describe('Renders ContactForm without errors', () => {
  it('renders ContactForm with no errors', () => {
    const wrapper = shallow(<ContactForm />);
    expect(wrapper);

  });
    
});

