import React from 'react'
import { render } from 'react-dom'

import App from 'App'
import AppProvider from './AppProvider'

const targetElement = document.querySelector('#app')

render(
    <AppProvider>
        <App />
    </AppProvider>,
    targetElement
)