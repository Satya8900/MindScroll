import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <NavigationBar />

      <main className="main-content-container">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
