import React from 'react';
import App from './App';
import { render, cleanup } from '@testing-library/react';

cleanup();

describe('testing app', () => {
  it('<App/> should render', () => {
    const { getByText } = render(<App />);
    const openSource = getByText('Eddie Jaoude Community');
    expect(openSource).toBeInTheDocument();
  });
  it('', () => {
    const {} = render(<App />);
  });
});
