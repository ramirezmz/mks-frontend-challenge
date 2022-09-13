import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styled'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import storeReducer from './features/Store'

const store = configureStore({
  reducer: {
    items: storeReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
)
