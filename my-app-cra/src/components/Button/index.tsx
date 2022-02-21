import React from 'react';

import { Container } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <Container>
      <button
        type="button"
        className={['storybook-button', `storybook-button--${size}`, mode].join(
          ' ',
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </Container>
  );
};

export default Button;
