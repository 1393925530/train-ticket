import { lazy, Suspense, useState } from 'react'
import './App.css'

const About = lazy(() => import(/* webpackChunkName: "about" */ './About.jsx'))

// ErrorBoundary
// componentDidCatch

function App() {
  const [error, setError] = useState(false)
  return !error ? (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <About></About>
      </Suspense>
    </div>
  ) : (
    <div>error</div>
  )
}

export default App
