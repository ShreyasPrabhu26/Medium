import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Footer } from "./components/Footer";
import { PopupWidget } from "./components/PopupWidget";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/blog/:blogId" element={<Blog />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </main>
          <Footer />
          <PopupWidget />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
