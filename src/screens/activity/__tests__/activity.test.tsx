import React from 'react';
import renderer from 'react-test-renderer';
import { Activity } from '../index';

describe('activity index test', () => {
  it('should render activity header titles', () => {
    const { toJSON } = renderer.create(<Activity />);

    expect(toJSON()).toMatchSnapshot();
  });
});
