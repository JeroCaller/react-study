import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

// import { Provider } from 'react-redux';
// import reduxCounterStore from './redux/redux-counter/reduxCounterStore.js';

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxCounterStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)