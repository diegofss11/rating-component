import React from 'react';
import renderer from 'react-test-renderer';
import {expect} from 'chai';
import StarSvg from './StarSvg';

window.React = React

describe('<StarSvg />', () => {
  it('should render accordingly', () => {
    const component = renderer.create(
      <StarSvg id={1} isActiveCallBack={jest.fn} onClickCallback={jest.fn} />
    ).toJSON();
  
    expect(component.type).to.be.equal('svg')
    expect(component.props.id).to.be.equal('star-1')
    expect(component.props.tabIndex).to.be.equal(1)
    expect(component.props.className).to.be.equal('star-wrapper active')
    expect(component.props.onClick).not.to.be.undefined
  });
});