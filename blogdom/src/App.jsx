import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Books } from "./pages/Books.jsx";
import { Update } from "./pages/Update.jsx";
import { Add } from "./pages/Add.jsx";
import { Home } from "./pages/Home";
import { RootLayout } from "./RootLayout";
import { Error } from "./pages/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/books" element={<Books />} />

        <Route path="/update/:Id" element={<Update />} />
        <Route path="/add" element={<Add />} />

        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
