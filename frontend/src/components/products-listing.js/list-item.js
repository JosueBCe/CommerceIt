import React from "react";

export const ListItem = ({ title, price, resourceUrl, icon }) => {
  // List item layout and style
  const titleByWord = title.split(" ")
  return (
    <a
      href={resourceUrl}
      className="list-item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="list-item__headline">
        { title.length < 15 ? title :  `${titleByWord[0]} ${titleByWord[1]}...`}
      </h3>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <p className="list-item__description" style={{ whiteSpace: 'pre-line' }}>{`From\n$${price}`}</p>        <img
          className="list-item__icon"
          src={icon}
          alt="external link icon"
        />
      </div>
    </a>

  )
};
