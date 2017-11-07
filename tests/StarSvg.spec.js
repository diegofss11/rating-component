import React from 'react';
import {expect} from 'chai';
import { mount } from 'enzyme';
import StarSvg from '../src/components/StarSvg';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<StarSvg />', () => {
  const minProps = {
    id: 1,
    isActiveCallBack: () => {},
    onClickCallback: () => {}
  }
  it('should render accordingly', () => {
    const wrapper = mount(
      <StarSvg {...minProps} />
    )

    expect(wrapper.prop('id')).to.be.equal(1);
    expect(wrapper.prop('isActiveCallBack')).to.be.an.instanceOf(Function);
    expect(wrapper.prop('onClickCallback')).to.be.an.instanceOf(Function);
    expect(wrapper.find('.star')).to.have.length(1);
  });
});