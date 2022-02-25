import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './components/App/App.jsx';
import { Provider } from 'react-redux'
import { store } from "./redux/store";
=======
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
>>>>>>> 0cc64699c1d0cd3f3a02827f984dd0b067d9ec37

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
<<<<<<< HEAD
)
=======
);

// reportWebVitals();
>>>>>>> 0cc64699c1d0cd3f3a02827f984dd0b067d9ec37
