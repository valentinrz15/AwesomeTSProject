import React from 'react';
import renderer from 'react-test-renderer';
import { ActivityHeader } from '../activity-header';

describe('activity header test', () => {
  it('should render activity header titles', () => {
    const { root, toJSON } = renderer.create(
      <ActivityHeader titleOne="Close" titleTwo="Filters" />,
    );
    const { titleOne, titleTwo } = root.props;

    expect(titleOne).toBe('Close');
    expect(titleTwo).toBe('Filters');
    expect(toJSON()).toMatchSnapshot();
  });
});
