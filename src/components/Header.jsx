import React from "react";
import { css } from "@emotion/react";

const Header = () => {
  return (
    <header
      css={css`
        height: 6vh;
        display: grid;
        grid-template-columns: minmax(250px, 25%) 1fr;
        place-items: center;
      `}
    >
      <h1>Contacts App</h1>
      <nav>
        <ul
          css={css`
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            font-weight: bold;
            font-size: large;
          `}
        >
          <li>Home</li>
          <li>About</li>
          <li>Query</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
