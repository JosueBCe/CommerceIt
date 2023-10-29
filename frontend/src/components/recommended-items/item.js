import React from "react";

export const RecommdItem = ({ title, price, resourceUrl, icon, description }) => {
    // Item of the recommended items layout  
    const titleByWord = title.split(" ")
    const shortedDescription = description.slice(0, 15)

    return (
        <a
            href={resourceUrl}
            className="item"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="item__image"
                src={icon}
                alt="external link icon"
            />

            <div style={{/*  display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" */ }}>
                <p className="item__headline">${price}</p>
                <h3 className="item__description">
                    {title.length < 15 ? title : `${titleByWord[0]} ${titleByWord[1]}...`}
                    <p>{shortedDescription && shortedDescription}</p>
                </h3>

            </div>
        </a>

    )
};
