import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConfigStore from "./store/ConfigStore.js";

export const ConfigStoreContext = createContext(ConfigStore)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigStoreContext.Provider value={ConfigStore}>
    <App/>
  </ConfigStoreContext.Provider>,
)
