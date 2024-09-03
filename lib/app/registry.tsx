import { createContext, useContext } from 'react'

const AppContext = createContext({})

const AppProvider = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export default AppProvider
