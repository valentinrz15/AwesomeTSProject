import React from 'react';
import renderer from 'react-test-renderer';
import { LoadingIndicator } from '../index';

const LOADING_INDICATOR_COLOR = '#000000';

describe('loading indicator test', () => {
  it('should render loading indicator with size small', () => {
    const render = renderer.create(<LoadingIndicator size="small" />).toJSON();

    expect(render).toMatchSnapshot();
  });
  it('should render loading indicator with size large', () => {
    const render = renderer.create(<LoadingIndicator size="large" />).toJSON();
    expect(render).toMatchSnapshot();
  });
  it('should render loading indicator with color', () => {
    const render = renderer
      .create(<LoadingIndicator color={LOADING_INDICATOR_COLOR} />)
      .toJSON();

    expect(render).toMatchSnapshot();
  });
  it('should render loading indicator without color and size', () => {
    const render = renderer.create(<LoadingIndicator />).toJSON();

    expect(render).toMatchSnapshot();
  });
});
