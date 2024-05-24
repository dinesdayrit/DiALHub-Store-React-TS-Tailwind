import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "@/pages/Root";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/auth/Login";
import About from "@/pages/About";
import Products from "@/pages/Products"
import Signup from "@/pages/auth/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="" element={<Root />}>
          {/* place your routes here so the navbar will be visible */}
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

      </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App;
