import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

let wrapper;
let instance;

beforeEach(() => {
  wrapper = shallow(<App />);
  instance = wrapper.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('App', () => {
  test('UnitTest App', () => {
    instance._testCall = jest.fn();
    instance.componentDidMount();

    expect(instance._testCall).toBeCalled();
  })

  test('Snapshot App', () => {
    expect(wrapper).toMatchSnapshot()
  })
});
