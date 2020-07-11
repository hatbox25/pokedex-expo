import React from 'react';
import { shallow } from 'enzyme';

import TextValue from './TextValue.component';
import config from './TextValue.config';

const props = {
  ...config.defaultProps
};
  
let component;
let instance;
beforeEach(() => {
  component = shallow(<TextValue {...props} />);
  instance = component.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('TextValue Unit Test', () => {});

describe('TextValue Snap Test', () => {
  test('should render correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});

