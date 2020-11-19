import React, { useCallback } from 'react';

function Hook04useCallback() {
  const memoizedCallback = useCallback(ev => {
    console.log(ev.target.value);
  }, []);
  return (
    <div>
      <input type='text' onChange={memoizedCallback} />
      <input type='text' onChange={memoizedCallback} />
    </div>
  );
}

export default Hook04useCallback;
