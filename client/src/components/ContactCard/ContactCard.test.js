import React from 'react';
import { shallow } from 'enzyme';

import ContactCard from './ContactCard';

describe('Renders ContactCard without errors', () => {
  it('Renders ContactCard', () => {
    const wrapper = shallow(
      <ContactCard 
        icon='fa-shopping-cart'
        title='Card Title'
        text='Some Text for test'
        cards={cards} 
      />);
    expect(wrapper);
  });

});

const cards = [{ 'icon': 'fa-shopping-cart', 
                 'title': "Footer Title",
                 'text': "Some great text to text the text in texting."},
               { 'icon': 'fa-laptop', 
                 'title': "LapTop Title",
                 'text': "SuperFastSuperLapTop."},
               { 'icon':"fa-lock",
                  'title':"Footer Title",
                  'text': "Some great text to text the text in texting."}];
