import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Contact component text content', () => {
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });
});

describe('Contact Submit button text content', () => {
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('submitbtn')).toHaveTextContent('Submit');
  });
});

