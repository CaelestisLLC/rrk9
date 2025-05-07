import React from 'react';
import { render, getByTestId, getByAltText } from '@testing-library/react';
import App from './App';

test('renders App-logo-image', () => {
  const { getByAltText } = render(<App />);
  const linkElement = getByAltText(/logo/i);
  expect(linkElement).toBeInTheDocument();
});

