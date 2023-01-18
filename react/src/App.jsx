import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const home = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">

      <RouterProvider router={home} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
