import React from 'react';
import TestRenderer from 'react-test-renderer';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

test("testRenderer.toJSON()", () => {
  console.log(testRenderer.toJSON());
  // { type: 'a',
  //   props: { href: 'https://www.facebook.com/' },
  //   children: [ 'Facebook' ] }
  expect(true).toBe(true);
});

test("testRenderer.toJSON() snapshot", () => {
  expect(testRenderer.toJSON()).toMatchSnapshot();
});