import React from "react";

import {
  FaFortAwesome,
  FaBed,
  FaBath,
  FaPoundSign,
  FaRegEnvelope,
} from "react-icons/fa";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <FaFortAwesome size="2em" color="#66fcf1" className="rlogo" />
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="type">
        <span>{type}</span>
      </div>
      <div className="bathroom">
        <FaBath size="2em" color="#66fcf1" />
        <span>{bathrooms}</span>
      </div>
      <div className="bedrooms">
        <FaBed size="2em" color="#66fcf1" />
        <span>{bedrooms}</span>
      </div>
      <div className="price">
        <FaPoundSign size="2em" color="#66fcf1" />
        <span>{price}</span>
      </div>
      <div className="city">
        <span>{city}</span>
      </div>
      <div className="email">
        <FaRegEnvelope size="2em" color="#66fcf1" />
        <span>{email}</span>
        <p>
          <a className="email-btn" href="mailto:someone@example.com">
            Email
          </a>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
