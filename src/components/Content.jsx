import { css } from "@emotion/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Content = () => {
  const {
    name: { first, last, title },
    email,
    phone,
    picture,
  } = useLoaderData();
  return (
    <article
      css={css`
        display: grid;
        grid-template-columns: 250px 1fr;
        height: 20vh;
        padding: 16px;
        width: 100%;
        column-gap: 16px;
        grid-area: content;
        @media screen and (max-width: 568px) {
          grid-template-columns: 120px 1fr;
          padding: 4px 16px;
          place-items: center;
        }
      `}
    >
      <figure
        css={css`
          width: 100%;
          padding: 0;
          place-self: center;
        `}
      >
        <img
          css={css`
            width: 100%;
            object-fit: cover;
            border-radius: var(--spacing-md);
          `}
          src={picture.large}
          alt="profile"
        />
      </figure>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          @media screen and (max-width: 568px) {
            justify-content: space-evenly;
          }
        `}
      >
        <h1
          css={css`
            font-size: var(--font-md);
            margin: 0;
          `}
        >
          {title} {first} {last}
        </h1>
        <h2
          css={css`
            font-size: var(--font-sm);
          `}
        >
          {email}
        </h2>
        <h3
          css={css`
            font-size: var(--font-sm);
          `}
        >
          {phone}
        </h3>
      </section>
    </article>
  );
};

export default Content;
