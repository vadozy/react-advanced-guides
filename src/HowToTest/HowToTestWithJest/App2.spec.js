/**
* @jest-environment node
*/

// - the above is needed only disabled test to
// - avoid "Error: Cross origin http://localhost forbidden"
// - https://medium.com/@joenjenga/its-jest-common-problem-faced-using-jest-9905e96db8a
import React from 'react';
import {create, act} from 'react-test-renderer';
 
import App from './App';
 

describe.skip('App', () => {

  test('snapshot renders using act()', async () => {
    let component;

    await act(async () => {
      component = create(<App />);
      await new Promise(resolve => setTimeout(() => resolve(), 1000));
    });
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

});