import React, { Suspense } from 'react';
import NonLazyComponent from './NonLazyComponent';

const LazyComponent = React.lazy(() => import('./LazyComponent'));
const LazyComponent2 = React.lazy(() => import('./LazyComponent2'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
        <LazyComponent2 />
        <LazyComponent />
        <NonLazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
