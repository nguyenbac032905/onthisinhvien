import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import Topic from "../pages/Topic";
import Answer from "../pages/Answer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import PrivateRouter from "../components/PrivateRouter";
import LogOut from "../pages/LogOut";
import InfoUser from "../pages/InfoUser";
import MyCourses from "../pages/MyCourses";
import Cart from "../pages/Cart";
export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <LogOut />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        element: <PrivateRouter />,
        children: [
          {
            path: "topic/:id?",
            element: <Topic />,
          },
          {
            path: "answer",
            element: <Answer />,
          },
          {
            path: "quiz/:id",
            element: <Quiz />,
          },
          {
            path: "result/:id",
            element: <Result />,
          },
          {
            path: "info-user",
            element: <InfoUser />,
          },
          {
            path: "my-courses",
            element: <MyCourses />,
          },
          {
            path: "cart",
            element: <Cart />,
          }
        ],
      },
    ],
  },
];
