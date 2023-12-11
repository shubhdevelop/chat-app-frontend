import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";
import ChatWindow from "./components/chat/ChatWindow.tsx";
import Home from "./components/Home.tsx";
import { Login } from "./components/Login.tsx";
import { SignUp } from "./components/SignUp.tsx";
import Profile from "./components/profile/Profile.tsx";
import { Bio, bioLoader } from "./components/Bio.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />}>
        <Route
          path="/profile/:userId"
          element={<Bio />}
          loader={bioLoader}
        ></Route>
      </Route>
      <Route path="/direct" element={<App />}>
        <Route index element={<ChatWindow />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
