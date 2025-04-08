import NavigationBar from "./components/NavigationBar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import BlogExpand from "./pages/BlogExpand"
import MyBlogs from "./pages/MyBlogs"
import WriteBlog from "./pages/WriteBlog"


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
          <Route path="/blog-expanded" element={<BlogExpand />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/write-blogs" element={<WriteBlog />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
