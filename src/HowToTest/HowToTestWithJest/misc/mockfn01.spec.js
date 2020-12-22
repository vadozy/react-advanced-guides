const f = (cb, v) => {
  cb(v);
};

describe('Jest Mock Function', () => {
  const fn = jest.fn();

  test('cb calles with primitive arg', () => {
    f(fn, 42);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(42);
  });

  test('cb calles with object', () => {
    const o = { p1: 'p1', p2: 42 };
    f(fn, o);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(o);
  });

  test('cb calles with object copy', () => {
    const o = { p1: 'p1', p2: 42 };
    const o2 = { p1: 'p1', p2: 42 };
    f(fn, o2);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(o);
  });

  test('cb calles with deep object copy', () => {
    const o = { p1: 'p1', p2: 42, p3: { p4: 'p4', p5: 4242 } };
    const o2 = { p1: 'p1', p2: 42, p3: { p4: 'p4', p5: 4242 } };
    f(fn, o2);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(o);
  });
});
