import React from "react";
import { css } from "@emotion/react";
import Searchbar from "./searchBar";

const Header = ({ onSearch }) => {
  return (
    <header
      css={css`
        height: 6vh;
        display: grid;
        grid-area: header;
        grid-template-columns: minmax(250px, 25%) 1fr;
        place-items: center;
      `}
    >
      <h1
        css={css`
          place-self: start;
          padding: var(--spacing-sm) var(--spacing-lg);
          font-size: var(--font-lg);
          margin: 0;
        `}
      >
        Contacts
      </h1>
      <nav
        css={css`
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding-right: var(--spacing-lg);
        `}
      >
        <div
          css={css`
            visibility: hidden;
            pointer-events: none;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            @media screen and (min-width: 568px) {
              visibility: visible;
              pointer-events: all;
            }
          `}
        >
          <Searchbar onSearch={onSearch} />
        </div>
        <button
          css={css`
            outline: none;
            border: none;
            background-color: var(--bg-light);
            color: var(--text-dark);
            border-radius: var(--spacing-sm);
            cursor: pointer;
            font-size: var(--font-lg);
            padding: 0 var(--spacing-sm);
            place-self: center;
          `}
        >
          +
        </button>
      </nav>
    </header>
  );
};

export default Header;
