import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/styles/style.scss";
import { App } from './app/app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App/>
  </StrictMode>,
)
