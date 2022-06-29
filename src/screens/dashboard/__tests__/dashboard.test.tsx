import React from 'react';
import renderer from 'react-test-renderer';
import { Dashboard } from '../index';

describe('dashboard test', () => {
  it('should render dashboard snapshot', () => {
    const { toJSON } = renderer.create(<Dashboard />);

    expect(toJSON()).toMatchSnapshot();
  });
});
