import { shallow } from "enzyme";
import { expect } from "chai";
import '../../test-setup'
import React from 'react'

import { Navlink } from "../components/Topnav/Navlink";
import { Topnav } from "../components/Topnav/Topnav";

let wrapper;

beforeEach(() => { wrapper = shallow(<Topnav current="Home"/>); });

describe('Topnav rendering tests', () => {
  it('Checks current=Home  has sr-only child ', () => {
    expect(wrapper.find('span.sr-only')).to.have.lengthOf(1)
  });

    it('Renders 4 nav-links  ', () => {
      expect(wrapper.find('a.nav-link')).to.have.lengthOf(4);
  });

  it('Checks that first link is "Home"', () => {
      expect(wrapper.find('a.nav-link').at(0).text()).to.be.equal('Home')
  });

});
