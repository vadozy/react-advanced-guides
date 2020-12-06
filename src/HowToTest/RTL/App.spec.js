import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App, { Search } from './App';

describe('App', () => {
  test('renders App component', () => {
    const renderResult = render(<App />);
    expect(renderResult).toMatchSnapshot();
    // screen.debug();
    renderResult.debug(renderResult.getByText('Search:'));
    expect(renderResult.getByText('Search:')).toBeInTheDocument();
    expect(screen.getByText(/Se.r.h:/)).toBeInTheDocument();
  });
});

describe('Search', () => {
  test('calls the onChange callback handler [Using fireEvent]', () => {
    const onChange = jest.fn();

    render(
      <Search value='' onChange={onChange}>
        Search:
      </Search>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('calls the onChange callback handler [Using UserEvent]', async () => {
    const onChange = jest.fn();

    render(
      <Search value='' onChange={onChange}>
        Search:
      </Search>
    );

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });
});
