import React from "react";
import { css } from "@emotion/react";

const Sidebar = () => {
  return (
    <aside
      css={css`
        padding: 1.2rem;
        border-right: 3px solid black;
        display: grid;
        grid-template-rows: auto 1fr;
      `}
    >
      <header>
        <form
          css={css`
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <input
            type="text"
            placeholder="Search Contacts From Your Contacts List"
            css={css`
              width: 100%;
              height: auto;
              padding: 0.5rem 1rem;
            `}
          />
          <button
            css={css`
              width: 100%;
              height: auto;
              padding: 0.5rem 1rem;
            `}
          >
            Search
          </button>
        </form>
      </header>
      <section>
        <div>Contacts display div</div>
      </section>
    </aside>
  );
};

export default Sidebar;
