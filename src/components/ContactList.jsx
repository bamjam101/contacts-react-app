import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { css } from "@emotion/react";

const ContactList = ({ searchText }) => {
  const data = useLoaderData() ?? [];
  const contacts = data?.results.filter((contact) => {
    const { first, last } = contact.name;
    return (
      first.toLowerCase().includes(searchText.toLowerCase()) ||
      last.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  return (
    <ul
      css={css`
        list-style: none;
        height: 70vh;
        padding: 0;
        overflow-y: scroll;
      `}
    >
      {contacts?.length
        ? contacts.map((contact) => {
            const {
              id: { value },
              name: { first, last },
            } = contact;
            return (
              <li key={value}>
                <NavLink
                  css={css`
                    width: 100%;
                    display: block;
                    text-decoration: none;
                    color: royalblue;
                    padding: 4px 8px;
                    opacity: 0.8;
                    &.active {
                      background: #b6b6b6af;
                      border-radius: 1rem;
                      color: black;
                      font-weight: bold;
                      opacity: 1;
                    }
                  `}
                  to={`/contacts/${value}`}
                >
                  {first} {last}
                </NavLink>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default ContactList;
