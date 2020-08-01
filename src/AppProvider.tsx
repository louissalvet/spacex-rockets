import React, { FC } from 'react'
import { Provider as StoreProvider } from 'react-redux'

import store from 'store'

const AppProvider:FC = ({ children }) => {
    return (
        <StoreProvider store={store}>
            {children}
        </StoreProvider>
    )
}

export default AppProvider