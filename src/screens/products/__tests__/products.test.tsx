import React from 'react';
import renderer from 'react-test-renderer';
import { Products } from '../index';

describe('products test', () => {
  it('should render products snapshot', () => {
    const render = renderer.create(<Products />).toJSON();

    expect(render).toMatchSnapshot();
  });
});
