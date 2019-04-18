import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

describe('Renders ContactForm without errors', () => {
  it('renders TopThree with no errors', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<ContactForm />, div);
    // ReactDOM.unmountComponentAtNode(div);
    const wrapper = shallow(<ContactForm />);
    expect(wrapper);

  });
    
});

