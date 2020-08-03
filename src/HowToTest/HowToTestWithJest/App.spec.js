import React from 'react';
import {create, act} from 'react-test-renderer';
 
import App, { Counter } from './App';
 
describe('Counter', () => {
  test('snapshot renders', () => {
    const component = create(<Counter counter={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('App', () => {
  test('snapshot renders', () => {
    let component;
    act(() => {
      component = create(<App />);
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});