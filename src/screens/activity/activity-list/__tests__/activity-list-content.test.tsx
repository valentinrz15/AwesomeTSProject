import React from 'react';
import renderer from 'react-test-renderer';
import { ActivityListContent } from '../activity-list-content';

describe('activity list content test', () => {
  it('should render activity list content snapshot', () => {
    const { toJSON, root } = renderer.create(
      <ActivityListContent data={{ id: '1', title: 'Hola' }} />,
    );
    const { data } = root.props;

    expect(data.id).toBe('1');
    expect(data.title).toBe('Hola');

    expect(toJSON()).toMatchSnapshot();
  });
});
