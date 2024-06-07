import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useState } from "react"
import Welcome from "./Pages/Welcome"
import Random from "./Pages/Random"
import SelectStory from "./Pages/SelectStory.tsx"
import NotFound from "./Pages/NotFound"
import SelectedTemplate from "./Pages/SelectedTemplate.tsx"

const App = () => {
  const [index, setIndex] = useState(0)
  const router = createBrowserRouter([
    { path: "/", element: <Welcome />, },
    { path: "/random", element: <Random />, },
    { path: "/option", element: <SelectStory setIndex={setIndex} />, },
    { path: "/option/:id", element: <SelectedTemplate index={index} />, },
    { path: "*", element: <NotFound />, },
  ])
  return (<RouterProvider router={router}></RouterProvider>
  )
}

export default App