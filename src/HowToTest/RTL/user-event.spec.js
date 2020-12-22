import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('click', () => {
  render(
    <div>
      <label htmlFor='checkbox'>Check</label>
      <input id='checkbox' type='checkbox' />
    </div>
  );

  userEvent.click(screen.getByText('Check'));
  expect(screen.getByLabelText('Check')).toBeChecked();
});

test('double click', () => {
  const onChange = jest.fn();
  render(<input type='checkbox' onChange={onChange} />);
  const checkbox = screen.getByRole('checkbox');
  userEvent.dblClick(checkbox);
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(checkbox).not.toBeChecked();
});

test('selectOptions', () => {
  render(
    <select multiple data-testid='select-multiple'>
      <option data-testid='val1' value='1'>
        A
      </option>
      <option data-testid='val2' value='2'>
        B
      </option>
      <option data-testid='val3' value='3'>
        C
      </option>
    </select>
  );

  userEvent.selectOptions(screen.getByTestId('select-multiple'), ['1', '3']);

  expect(screen.getByTestId('val1').selected).toBe(true);
  expect(screen.getByTestId('val2').selected).toBe(false);
  expect(screen.getByTestId('val3').selected).toBe(true);
});
