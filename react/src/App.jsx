import './App.css'
import Home from './pages/Home'
import Handstand from './pages/Handstand';
import Oah from './pages/oah';
import NoPage from './pages/NoPage';
import SFD30 from './pages/SFD30';
import SFDDisiplin from './pages/SFDDisiplin';

import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const home = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/error",
      element: <NoPage />,
    },
    {
      path: "/handstand",
      element: <Handstand />,
    },
    {
      path: "/oah",
      element: <Oah />,
    },
    {
      path: "/sfddisiplin",
      element: <SFDDisiplin />,
    },
    {
      path: "/sfd30",
      element: <SFD30 />,
    }
  ]);

  // const handstand = createBrowserRouter([
  //   {
  //     path: "/handstand",
  //     element: <Handstand />,
  //   },
  // ]);

  // const oah = createBrowserRouter([
  //   {
  //     path: "/oah",
  //     element: <Oah />,
  //   },
  // ]);

  return (
    <div className="App">

      <RouterProvider router={home} />
      {/* <RouterProvider router={handstand} />
      <RouterProvider router={oah} /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
