import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Login from "./pages/login"
import Signup from "./pages/Signup"


function App() {

  return (
    <>
      <NavigationBar />

      <main className="main-content-container">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
