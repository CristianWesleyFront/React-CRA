import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from 'stories/Button/Button.stories'; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Primary, Secondary, Large, Small } = composeStories(stories);

afterEach(cleanup);

describe('<Button />', () => {
  it('renders primary button with default args', () => {
    render(<Primary />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).not.toBeNull();
    expect(buttonElement).toHaveClass('storybook-button--primary');
  });
  it('renders Secondary button with default args', () => {
    render(<Secondary />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).not.toBeNull();
    expect(buttonElement).toHaveClass('storybook-button--secondary');
  });
  it('renders Large button with default args', () => {
    render(<Large />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).not.toBeNull();
    expect(buttonElement).toHaveClass('storybook-button--large');
  });
  it('renders Small button with default args', () => {
    render(<Small />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).not.toBeNull();
    expect(buttonElement).toHaveClass('storybook-button--small');
  });
});
