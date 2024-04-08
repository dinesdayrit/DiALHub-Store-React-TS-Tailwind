import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="" element={<Root />}>
          {/* place your routes here so the navbar will be visible */}
          <Route path="" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />

      </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App;
