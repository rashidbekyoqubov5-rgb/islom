import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pricing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument();
});
