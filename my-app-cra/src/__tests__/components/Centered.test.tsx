import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Centered from 'components/Centered';

afterEach(cleanup);

describe('<Centered />', () => {
  it('should render an <button> tag', () => {
    const { container } = render(
      <Centered>
        <span>Hello Word</span>s
      </Centered>,
    );
    expect(container.children).not.toBeNull();
  });

  it('Should render Centered Element', () => {
    render(
      <Centered>
        <span>Hello Word</span>s
      </Centered>,
    );

    const centered = screen.getByTestId(/centered/i);
    const helloWord = screen.getByText(/Hello Word/i);

    // Test hello word has been apply
    expect(helloWord).toHaveTextContent(/Hello Word/i);

    // Test if styles has been apply
    expect(centered).toHaveStyle('display: flex');
  });
});
