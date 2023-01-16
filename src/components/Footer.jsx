import React from "react";
import { css } from "@emotion/react";

const Footer = () => {
  return (
    <footer
      css={css`
        height: 4vh;
        width: 100%;
        text-align: center;
      `}
    >
      Copyright &copy; All rights reserved by developer bamjam101.
    </footer>
  );
};

export default Footer;
