// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Controls from '../controls/Controls';
import Display from '../display/Display';

test('Dashboard shows controls', () => {
  render(<Controls />);
});

test('Dashboard shows display', () => {
  render(<Display />);
});
