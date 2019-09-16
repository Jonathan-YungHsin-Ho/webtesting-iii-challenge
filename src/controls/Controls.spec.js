// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

// provide buttons to toggle the closed and locked states
test('Controls Component provides buttons to toggle "closed" and "locked" states', () => {
  const { getAllByRole } = render(<Controls />);
  getAllByRole('button');
});

// buttons' text changes to reflect the state the door will be in if clicked
test('Controls Component changes button text to reflect state of if clicked', () => {
  expect(true).toBe(false);
});

// the closed toggle button is disabled if the gate is locked
test('Controls Component disables closed button if gate is locked', () => {
  const component = render(<Controls locked={true} closed={true} />);
  const button = component.getByText(/open gate/i);
  expect(button.disabled).toBe(true);
});

// the locked toggle button is disabled if the gate is open
test('Controls Component disables locked button if gate is open', () => {
  const component = render(<Controls locked={false} closed={false} />);
  const button = component.getByText(/lock gate/i);
  expect(button.disabled).toBe(true);
});
