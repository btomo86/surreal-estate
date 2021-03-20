import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Properties.css";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import { useLocation } from "react-router";

const initialState = {
  properties: [],
  alert: {
    message: "",
    isSuccess: false,
  },
};

function Properties() {
  const [properties, setProperties] = useState(initialState.properties);

  const [alert, setAlert] = useState(initialState.alert);
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then((response) => {
        setProperties(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setAlert({ message: "Error retrieving data", isSuccess: false });
        console.log(err);
      });
  }, [search]);
  return (
    <>
      <h2>Properties Page</h2>
      <div className="propertie-container">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    </>
  );
}

export default Properties;
