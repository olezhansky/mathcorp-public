import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import store from './store/store'
import theme from './theme'
import history from './util/history'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
