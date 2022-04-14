import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Button from 'components/Button';

afterEach(cleanup);

describe('<Button />', () => {
  const mockFunc = jest.fn();

  it('should render an <button> tag', () => {
    const { container } = render(<Button label="Default Button" />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('Should render Button with default props', () => {
    render(<Button label="Default Button" />);

    const button = screen.getByRole('button');

    // Test Label Button
    expect(button).toHaveTextContent(/Default Button/i);
    // Test if secondary has been apply
    expect(button).toHaveClass('storybook-button--secondary');
    // Test if size has been apply
    expect(button).toHaveClass('storybook-button--medium');
    // Test if backgroundColor has been apply
    expect(button).toHaveStyle('background-color: transparent');
  });

  it('Should render Button', () => {
    render(
      <Button
        primary
        label="Primary Button"
        size="small"
        onClick={mockFunc}
        backgroundColor={'#fff'}
      />,
    );

    const button = screen.getByRole('button');

    // Test Label Button
    expect(button).toHaveTextContent(/Primary Button/i);
    // Test if primary has been apply
    expect(button).toHaveClass('storybook-button--primary');
    // Test if size has been apply
    expect(button).toHaveClass('storybook-button--small');
    // Test if onClink has been called
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalledTimes(1);
    // Test if backgroundColor has been apply
    expect(button).toHaveStyle('background-color: #fff');
  });
});
