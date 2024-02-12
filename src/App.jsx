import AppRoutes from "./AppRoutes"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

function App() {

  return (
    <div id="app">
      <Nav />
      <AppRoutes />
      <Footer />
      <div id='copyright'>
        <p>copyright 2024 Mae May</p>
      </div>
    </div>
  )
}

export default App
