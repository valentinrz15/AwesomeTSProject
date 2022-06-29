import React from 'react';
import renderer from 'react-test-renderer';
import { ActivityListHeader } from '../activity-list-header';

describe('activity list header test', () => {
  it('should render activity list header snapshot', () => {
    const { toJSON, root } = renderer.create(
      <ActivityListHeader title="Close" />,
    );

    expect(root.props.title).toBe('Close');

    expect(toJSON()).toMatchSnapshot();
  });
});
