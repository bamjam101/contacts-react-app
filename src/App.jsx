import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { css } from "@emotion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main
        css={css`
          display: grid;
          grid-template-columns: minmax(250px, 25%) 1fr;
          height: 90vh;
        `}
      >
        <Sidebar />
        <section className="content">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
