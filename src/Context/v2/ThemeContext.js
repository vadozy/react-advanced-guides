import React from 'react';

export const initialContext = {
  theme: 'blue',
  changeTheme: () => null,
};

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
const context = React.createContext(initialContext);
context.displayName = `"Vadim's first React Context"`; // shown in React DevTools
export default context;
