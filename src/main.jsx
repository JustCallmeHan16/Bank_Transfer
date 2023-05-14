import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

const colors = {
  mario : '#28a835'
}

const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App/>
        </ChakraProvider>
     </Provider>
)
