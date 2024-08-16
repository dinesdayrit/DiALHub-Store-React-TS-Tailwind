import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
const Root = lazy(() => import("@/pages/Root"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const Login = lazy(() => import("@/pages/auth/Login"));
const About = lazy(() => import("@/pages/About"));
const Signup = lazy(() => import("@/pages/auth/Signup"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage"));
const ProductDetails = lazy(
  () => import("@/components/products/ProductDetails")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Root />}>
      {/* place your routes here so the navbar will be visible */}
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
