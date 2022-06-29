import React from 'react';
import renderer from 'react-test-renderer';
import { ModalDefault } from '../index';

describe('modal default test', () => {
  it('should render modal default snapshot', () => {
    const render = renderer.create(<ModalDefault />).toJSON();

    expect(render).toMatchSnapshot();
  });
});
