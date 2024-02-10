import AppRoutes from "./AppRoutes"
import Footer from "./components/Footer"
import Nav from "./components/Nav"


function App() {


  return (
    <div className="app-container">
      <Nav />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
