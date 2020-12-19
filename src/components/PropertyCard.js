import React from "react";
import {
  FaFortAwesome,
  FaBed,
  FaBath,
  FaPoundSign,
  FaMailBulk,
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
      <FaFortAwesome />
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="type">
        <span>{type}</span>
      </div>
      <div className="bathroom">
        <FaBath />
        <span>{bathrooms}</span>
      </div>
      <div className="bedrooms">
        <FaBed />
        <span>{bedrooms}</span>
      </div>
      <div className="price">
        <FaPoundSign />
        <span>{price}</span>
      </div>
      <div className="city">
        <span>{city}</span>
      </div>
      <div className="email">
        <FaMailBulk />
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
