import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import FullPageScroll from './FullPageScroll.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FullPageScroll />
    {/* <App /> */}
  </StrictMode>,
)
