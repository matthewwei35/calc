import React from 'react';
import { Provider } from 'react-redux';

import { TipCalculator } from './components/TipCalculator';
import { store } from './store';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <TipCalculator />
    </Provider>
  );
}

export default App;
