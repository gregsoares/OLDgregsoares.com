import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import TreeSection from './TreeSection';

describe('Renders TreeSection without errors', () => {
  it('renders TopThree with no errors', () => {
    const wrapper = shallow(
      <TreeSection 
        title='Section Title' 
        subtitle='Section Subtitle'
        nodes={nodes}
        />);
    expect(wrapper);

  });
    
});

    const nodes = [{
      imgPath: "img/about/1.jpg",
      title: "Original Node",
      subtitle: "Something extraordinary came to pass",
      text: "I had a new hobby"
      },{
      imgPath: "img/about/2.jpg",
      title: "First Generation",
      subtitle: "Something extraordinary came to pass",
      text: "I had a new hobby"
      },
      {
      imgPath: "img/about/3.jpg",
      title: "Second Gen",
      subtitle: "Something extraordinary came to pass",
      text: "I had a new hobby"
      },
      {
      imgPath: "img/about/4.jpg",
      title: "third 39th",
      subtitle: "Something extraordinary came to pass",
      text: "I had a new hobby"
     }]


