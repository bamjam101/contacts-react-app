import { css } from "@emotion/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Contact from "./Contact";

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
        padding: 16px;
        column-gap: 16px;
      `}
    >
      <figure
        css={css`
          height: 100%;
          padding: 0;
          place-self: center;
        `}
      >
        <img
          css={css`
            height: 100%;
            object-fit: contain;
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
        `}
      >
        <h1>
          {title} {first} {last}
        </h1>
        <h2>{email}</h2>
        <h3>{phone}</h3>
      </section>
    </article>
  );
};

export default Content;
