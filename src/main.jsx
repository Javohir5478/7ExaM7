import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Store } from './redux/reducers/Store.jsx'
import { AppProvider } from './utils/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider store={Store}>
    <App />
    </AppProvider>
  </React.StrictMode>,
)
