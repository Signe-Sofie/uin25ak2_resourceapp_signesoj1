import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom' 
import Resources from './components/Resources' 

/*Jeg har fått hjelp til å løse oppgaven fra Hanna Hänel Sørum, etter å ha snakket med Marius så fikk vi besjed om at det går fint så lenge 
jeg er åpen om det å skriver en kommentar i koden. 
Kjære Hanna, hva skulle jeg gjort uten deg, du er en god venn, en støttespiller og min store glede her på skolen. Jeg setter pris på deg,
alt du gjør for meg og alt vi gjør sammen, det er en sann glede å ha blitt kjent med deg. Utrolig glad i deg, hilsen din lille sidekick*/
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Layout>
      <Routes>
        <Route path="/" element={<Resources category={"html"} />} />
        <Route path="/html" element={<Resources category={"html"} />} />
        <Route path="/css" element={<Resources category={"css"} />} />
        <Route path="/javascript" element={<Resources category={"javascript"} />} />
        <Route path="/react" element={<Resources category={"react"} />} />
        <Route path="/headless-cms" element={<Resources category={"headless-cms"} />} />
      </Routes>
    </Layout>
  </>
  )
}

export default App
