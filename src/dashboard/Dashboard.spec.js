// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

test('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});

// gate defaults to unlocked and open
test('Gate defaults to unlocked and open', () => {
  const dashboard = render(<Dashboard />);
  expect(dashboard.getByText(/open/i));
  expect(dashboard.getByText(/unlocked/i));
});

// gate cannot be closed or opened if it is locked
test('Gate cannot be closed or opened if it is locked', () => {
  const component = render(<Controls locked={true} closed={true} />);
  expect(component.queryByText(/close gate/i)).toBe(null);

  const button = component.getByText(/open gate/i);
  expect(button.disabled).toBe(true);
});

// shows the controls and display
test('Dashboard shows controls', () => {
  render(<Controls />);
});

test('Dashboard shows display', () => {
  render(<Display />);
});
