import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { Provider as StoreProvider } from 'react-redux';
import store from '../services/redux/store/store';

const Main = () => {
  return (
    <StoreProvider store={store()}>
      <Routes />
      </StoreProvider>
  );
}

export default Main;