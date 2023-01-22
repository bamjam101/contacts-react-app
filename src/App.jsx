import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { css } from "@emotion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  function onSearch(text) {
    setSearchText(text);
  }
  return (
    <>
      <Header onSearch={onSearch} />
      <main
        css={css`
          display: grid;
          grid-template-areas: "sidebar content";
          grid-template-columns: minmax(250px, 25%) 1fr;
          height: 90vh;
          @media screen and (max-width: 568px) {
            grid-template-areas:
              "content content"
              "sidebar sidebar";
          }
        `}
      >
        <Sidebar searchText={searchText} onSearch={onSearch} />
        <section
          css={css`
            position: relative;
            width: 100%;
            @media screen and (max-width: 568px) {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 20vh;
              width: 100vw;
            }
          `}
        >
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
