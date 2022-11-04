import React from "react";
import PropType from "prop-types";

/**
 * Show user Activity with bar chart
 * @param { Object } params
 * @param { HTMLImageElement } params.image
 * @param { Number } params.stat
 * @param { String } params.title
 * @param { String } params.type
 * @returns {JSX}
 */
export default function UserStats({ image, stat, title, type }) {
  // propTypes
  UserStats.propTypes = {
    image: PropType.elementType.isRequired,
    stat: PropType.number.isRequired,
    title: PropType.string.isRequired,
    type: PropType.string.isRequired,
  };

  return (
    <div className="result-user-container">
      <div className="result-user">
        <img src={image} alt="icon" />
        <div>
          <span className="keydata">
            {stat}
            {type}
          </span>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
