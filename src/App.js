import React from 'react';
import configureStore from "./redux/config";
import HomePage from './components/pages/HomePage';
import {Provider} from "react-redux";

function App() {

  const store = configureStore();

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
