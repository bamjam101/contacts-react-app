import React, { useState } from "react";
import { css } from "@emotion/react";
import ContactList from "./ContactList";
import Searchbar from "./searchBar";

const Sidebar = ({ searchText, onSearch }) => {
  return (
    <aside
      css={css`
        padding: 1.2rem;
        border-right: 3px solid black;
        display: grid;
        grid-area: sidebar;
        grid-template-rows: auto 1fr;
        @media screen and (max-width: 568px) {
          background: var(--bg-light);
          border-top-left-radius: var(--spacing-lg);
          border-top-right-radius: var(--spacing-lg);
          color: var(--text-dark);
        }
      `}
    >
      <div
        css={css`
          display: none;
          @media screen and (max-width: 568px) {
            display: block;
          }
        `}
      >
        <Searchbar onSearch={onSearch} />
      </div>
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
