import React from 'react'
import GlobalStyle from './GlobalStyle';
import MyRoutes from './routes';
import {ToastContainer} from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <MyRoutes />
        <ToastContainer autoClose={10000} />
      </PersistGate>
    </Provider>
  );
}

export default App;
