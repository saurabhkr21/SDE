import React from "react";
import Header from "./components/Header";
import CategoryBar from "./components/ComponentBar";
import Home from "./pages/Home";

import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router";
import Auth from "./pages/Auth";
import Product from "./pages/Product";
import Products from "./pages/Products";
import PageLayout from "./components/PageLayout";
import Cart from "./pages/Cart";

// const navigate = useNavigate();

// function Navigate ({to = ""}) {
//   const navigate = useNavigate();
//   React.useEffect(() => {
//     navigate(to);
//   }, [to, navigate]);
//   return null;

// }

const router = createBrowserRouter(
  [
    {
      path: "auth",
      element: <Auth />,
    },
    {
      index: "/",
      // element: <>{navigate("home")}</>
      element: <PageLayout />,
      // element: <Navigate to={"home"} />
      children: [
        {
          index: true,
          element: <Navigate to={"home"} />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "products",
          children: [
            {
              index: true,
              element: <Products />,
            },
            {
              path: ":productId",
              element: <Product />,
            },
            {
              path: "*",
              element: <div>Products Not Found</div>,
            },
          ],
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <div>Page Not Found</div>,
        },
      ],
    },
  ],
  {
    // basename: "/explorazon",
    // routes: [
    //   {
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}

// export default function App() {
//   return <RouterProvider router={router} />;

// return (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<div>Hello World</div>} />
//     </Routes>
//   </BrowserRouter>
// );

// return (
//   <div className=''>

//     <Header />
//     <CategoryBar />
//     <Home />
//   </div>
// )
// }

// function RouterProvider({ router = [] }) {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {router.map(({ path, element, ...rest }) => (
//           <Route path={path} element={element} {...rest}>
//             {}
//           </Route>
//         ))}
//       </Routes>
//     </BrowserRouter>
//   );
// }