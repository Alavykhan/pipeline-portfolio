import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home";
import Work from "../components/Work/Work";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path: 'work',
          element:<Work/>
        },
        {
          path:'services',
          element: <Services/>
        },
        {
          path:'team',
          element: <Team/>
        },
        {
          path: 'contact',
          element:<Contact/>
        }
      ]
    },
  ]);

  export default router;