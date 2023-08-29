import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ArtPage from "./components/ArtPage/ArtPage";
import { ImageContextProvider } from "./context/LightBoxContext";

const Root = () => {
  return (
    <ImageContextProvider>
      <Header />
      <Outlet />
    </ImageContextProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "test",
        element: <div>Test</div>
      },
      {
        path: "art/:artId",
        element: <ArtPage />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
