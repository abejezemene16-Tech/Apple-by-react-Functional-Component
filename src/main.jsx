

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import all css files at this main.jsx file to make them globaly available to all components.
// import './index.css'
// import './components/header/Forall.css'
// import './App.css'


import App from './App.jsx'



// render App.jsx to index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


