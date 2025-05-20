import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './redux/store.js'  //store is imported from redux/store.js to the whole application.
import { Provider } from 'react-redux'   //Provider is imported from react-redux to provide the store to the whole application.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
//wrapped the whole application with the Provider component and passed the store as a prop to the Provider component.  