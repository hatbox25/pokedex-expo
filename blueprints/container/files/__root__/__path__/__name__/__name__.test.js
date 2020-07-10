import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import <%= pascalEntityName %>Container from './<%= pascalEntityName %>.container';
import <%= pascalEntityName %> from './<%= pascalEntityName %>.component';
import config from './<%= pascalEntityName %>.config';

jest.mock('components', () => ({
  Button: () => 'Button'
}));

const mockStore = configureStore([thunk]);
const initialState = {  };
const store = mockStore(initialState);
  
const props = {
  ...config.defaultProps
};
  
let wrapper;
let instance;
beforeEach(() => {
  wrapper = shallow(<<%= pascalEntityName %> {...props} />);
  instance = wrapper.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<%= pascalEntityName %> Unit Test', () => {});

describe('<%= pascalEntityName %> Snap Test', () => {
  test('should render correctly', () => {
    expect(shallow(<<%= pascalEntityName %>Container store={store} />)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });
});

