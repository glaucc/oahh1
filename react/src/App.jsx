import './App.css'
import Home from './pages/Home'
import Handstand from './pages/Handstand';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const home = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  const handstand = createBrowserRouter([
    {
      path: "/handstand",
      element: <Handstand />,
    },
  ]);

  return (
    <div className="App">

      <RouterProvider router={home} />
      <RouterProvider router={handstand} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
