import React from 'react';
import { render, screen } from '@testing-library/react';
 
import App from './App2';
 
describe('App2', () => {
  test('renders App component with async User', async () => {
    render(<App />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

  });
});