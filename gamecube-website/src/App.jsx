import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import Main from './main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className="App">
    <Main />
    </section>
  </React.StrictMode>,
)