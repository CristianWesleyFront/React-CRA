import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Dashboard } from 'pages/Dashboard';

afterEach(cleanup);

describe('<Dashboard />', () => {
  it('should render an Dashboard ', () => {
    const { container } = render(<Dashboard />);
    expect(container.id).not.toBeNull();
  });
});
