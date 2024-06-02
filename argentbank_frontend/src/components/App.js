import "../assets/styles.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Dashboard from "./User/Dashboard";
import {SignIn} from "./User/SignIn";

const routesJSX = (
  <Route path={"/"} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={"signin"} element={<SignIn />} />
      <Route path={"dashboard"} element={<Dashboard />} />
  </Route>
)

const routes = createRoutesFromElements(routesJSX)
const router = createBrowserRouter(routes)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
