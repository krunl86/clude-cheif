import { createRoot } from 'react-dom/client'
import Header from './components/header/Header.jsx'
import Content from './components/content/Content.jsx'

createRoot( document.getElementById( 'root' ) ).render(
  <>
    <Header />
    <Content />
  </>

)
