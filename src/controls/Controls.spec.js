// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

test('Controls Component provides buttons to toggle "closed" and "locked" states', () => {
  const { getAllByRole } = render(<Controls />);
  getAllByRole('button');
});
