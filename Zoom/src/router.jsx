import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import Landing from "./pages/Landing";
import GetStarted from "./pages/GetStarted";
import EmailVerificationCode from "./pages/EmailVerificationCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
  },
  {
    path: "/Email-verify",
    element: <EmailVerificationCode />,
  },
]);

export default router;
