import { shallow } from "enzyme";
import { expect } from "chai";
import React from 'react'

import '../../test-setup'
import { findByTestAttr } from '../testUtils'
import { Topnav } from "../components/Topnav/Topnav";

let wrapper, navLink;

beforeEach(() => {
  wrapper = shallow(<Topnav current="Home"/>);
  navLink = wrapper.find('a.nav-link');

 });

describe('Topnav rendering tests', () => {
  
  describe('Renders without error', () => {
    it('Renders without errors', () => {
      let component = findByTestAttr(wrapper, 'Topnav')
      expect(component.length).to.equal(1)
    });

    it('checks for navlink-list', () => {
      let component = findByTestAttr(wrapper, 'navlink-list')
      expect(component.length).to.equal(1)
    });
  });

  it('Checks current=Home  has sr-only child ', () => {
    expect(wrapper.find('span.sr-only')).to.have.lengthOf(1)
  });

    it('Renders 4 nav-links  ', () => {
      expect(navLink).to.have.lengthOf(4);
  });

  it('Checks that first link is "Home"', () => {
      expect(navLink.at(0).text()).to.be.equal('Home')
  });
  
  // TODO: ENHANCEMENT - check that no other navLink has active or (sr-only child)
  it('Checks that second link is not active', () => {
      expect(navLink.at(1)).does.not.equals('active')
  });
  

});
