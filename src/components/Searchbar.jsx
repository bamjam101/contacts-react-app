import { css } from "@emotion/react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbar = ({ onSearch }) => {
  const searchElementRef = useRef(null);
  function onSubmit(event) {
    event.preventDefault();
    onSearch(searchElementRef.current.value);
  }
  return (
    <header
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
      `}
    >
      <form
        css={css`
          width: 100%;
          height: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
        onSubmit={onSubmit}
      >
        <input
          ref={searchElementRef}
          type="text"
          placeholder="Search"
          css={css`
            width: 80%;
            height: auto;
            padding: 0.5rem 1rem;
            background: var(--bg-light);
            border-radius: var(--spacing-lg);
            outline: none;
            border: none;
            @media screen and (max-width: 568px) {
              border: 3px solid black;
              background: rgba(74, 74, 74, 0.2);
              color: black;
            }
          `}
        />
        <button
          css={css`
            padding: 0.5rem 1rem;
            pointer-events: none;
            opacity: 0;
            outline: none;
            height: 100%;
            border: none;
            border-radius: 45%;
            z-index: -999;
            @media screen and (max-width: 568px) {
              pointer-events: all;
              opacity: 1;
              border: 2px solid black;
            }
          `}
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
