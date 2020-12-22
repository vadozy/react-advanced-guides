import TestRenderer from 'react-test-renderer';

function MyComponent() {
  return (
    <div>
      <SubComponent foo='bar' />
      <p className='my'>Hello</p>
    </div>
  );
}

function SubComponent() {
  return <p className='sub'>Sub</p>;
}

test('testInstance', () => {
  const testRenderer = TestRenderer.create(<MyComponent />);

  console.log(testRenderer.toJSON());

  const testInstance = testRenderer.root;

  expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
  expect(testInstance.findByProps({ className: 'sub' }).children).toEqual([
    'Sub',
  ]);
});
