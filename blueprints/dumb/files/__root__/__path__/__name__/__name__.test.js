import React from 'react';
import { shallow } from 'enzyme';

import <%= pascalEntityName %> from './<%= pascalEntityName %>.component';
import config from './<%= pascalEntityName %>.config';

const props = {
  ...config.defaultProps
};
  
let component;
let instance;
beforeEach(() => {
  component = shallow(<<%= pascalEntityName %> {...props} />);
  instance = component.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<%= pascalEntityName %> Unit Test', () => {});

describe('<%= pascalEntityName %> Snap Test', () => {
  test('should render correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});

