import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Content from "./components/Content";
import { loadContact, loadContacts } from "./loadContacts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} loader={loadContacts}>
      <Route
        path="/contacts/:contactId"
        loader={({ params }) => loadContact(params.contactId)}
        element={<Content />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
