import React from 'react';
import '../../test-setup'
import { findByTestAttr } from '../testUtils'

import { Container } from "../components/Container/Container";
import { shallow } from "enzyme";
import { expect } from "chai";

import { Topnav } from "../components/Topnav/Topnav";

let wrapper;
const content = () => {

  return (
    <Topnav current='Github'/>
  )
}

beforeEach(() => {
  wrapper = shallow((<Container Content={content}/>))
});

describe('Container renders without error', () => {
  it('Renders <Container />', () => {

    let component = findByTestAttr(wrapper, "Container")
    expect(component.length).to.be.equal(1)


  });

// FIXME: testing for Content prop by checking data-test="Topnav"
  // describe('Renders Content Attribute without errors', () => {
  //     it('data-test=Topnav', () => {
  //       let component = findByTestAttr(wrapper,'navlink-list')
  //       console.log(wrapper.debug())
  //       expect(component.length).to.be.equal(1)
  //     })

      // FIXME: Checks that data-test=Navlink lengthOf(3)
      //  it('data-test=navlink-list', () => {
      //   let component = findByTestAttr(wrapper,'Navlink').children()
      //   expect(component.length).to.be.equal(3)
      // })

      // TODO: add a check for data-test=activeNavlink lengthOf(1)
      //  it('data-test=Topnav', () => {
      //   let component = findByTestAttr(wrapper,'activeNavlink')
      //   expect(component.length).to.be.equal(1)
      // })

    // })

  });
