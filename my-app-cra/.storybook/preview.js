import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Center from '../src/components/Centered';

addDecorator(withInfo);
addDecorator(story => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
