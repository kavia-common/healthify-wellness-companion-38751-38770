import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './state/StoreProvider';
import App from './App';

test('renders Healthify brand in navbar', () => {
  render(
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  );
  const brand = screen.getByText(/Healthify/i);
  expect(brand).toBeInTheDocument();
});
