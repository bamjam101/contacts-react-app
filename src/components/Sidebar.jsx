import React, { useState } from "react";
import { css } from "@emotion/react";
import ContactList from "./ContactList";
import Searchbar from "./searchBar";

const Sidebar = () => {
  const [searchText, setSearchText] = useState("");
  function onSearch(text) {
    setSearchText(text);
  }
  return (
    <aside
      css={css`
        padding: 1.2rem;
        border-right: 3px solid black;
        display: grid;
        grid-template-rows: auto 1fr;
      `}
    >
      <Searchbar onSearch={onSearch} />
      <section
        css={css`
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem 0;
        `}
      >
        <ContactList searchText={searchText} />
      </section>
    </aside>
  );
};

export default Sidebar;
