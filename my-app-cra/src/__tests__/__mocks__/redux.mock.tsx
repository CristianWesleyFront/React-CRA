import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/store';
// import { Container } from './styles';

const store = configureAppStore();

const Redux: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Redux;
