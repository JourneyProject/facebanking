import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Open Facebook Messenger/i);
  expect(linkElement).toBeInTheDocument();
});
