import { css } from "@emotion/react";
import { useRef } from "react";

const Searchbar = ({ onSearch }) => {
  const searchElementRef = useRef(null);
  function onSubmit(event) {
    event.preventDefault();
    onSearch(searchElementRef.current.value);
  }
  return (
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
        onSubmit={onSubmit}
      >
        <input
          ref={searchElementRef}
          type="text"
          placeholder="Search Contacts"
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
  );
};

export default Searchbar;
