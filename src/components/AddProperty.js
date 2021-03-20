import React, { useState } from "react";
import "../styles/AddProperty.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleAddProperty = async (event) => {
    event.preventDefault();

    setAlert({ message: "", isSuccess: false });

    await axios
      .post("http://localhost:3000/api/v1/PropertyListing", fields)
      .then(() =>
        setAlert({
          message: "Property Added Successfully",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        })
      );
  };

  return (
    <div className="AddProperty">
      <form className="propertyForm" onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <label htmlFor="title">
          Text
          <input
            id="title"
            name="title"
            value={fields.title}
            type="text"
            placeholder="Add Property"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Property Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            type="text"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            type="text"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="Price">
          Price
          <input
            id="price"
            name="price"
            value={fields.price}
            type="text"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={fields.email}
            type="text"
            onChange={handleFieldChange}
            required
          />
        </label>
        <button className="btn" type="submit">
          Add
        </button>
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
};

export default AddProperty;
