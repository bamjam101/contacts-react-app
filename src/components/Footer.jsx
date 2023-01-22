import React from "react";
import { css } from "@emotion/react";

const Footer = () => {
  return (
    <footer
      css={css`
        display: grid;
        grid-area: footer;
        height: 4vh;
        width: 100vw;
        text-align: center;
        border: none;
        outline: none;
        @media screen and (max-width: 568px) {
          background-color: var(--bg-light);
          color: var(--text-dark);
        }
      `}
    >
      Copyright &copy; All rights reserved by developer bamjam101.
    </footer>
  );
};

export default Footer;
