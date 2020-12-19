import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

test("Renders with a title", () => {
  const { getByText } = render(<PropertyCard title="title" />);
  getByText(/title/i);
});

test("Renders with a type", () => {
  const { getByText } = render(<PropertyCard type="type" />);
  getByText(/type/i);
});

test("Renders with a bathroom number", () => {
  const { getByText } = render(<PropertyCard bathrooms="1" />);
  getByText(/1/i);
});

test("Renders with number of bedrooms", () => {
  const { getByText } = render(<PropertyCard bedrooms="1" />);
  getByText(/1/i);
});

test("Renders with a price", () => {
  const { getByText } = render(<PropertyCard price="1" />);
  getByText(/1/i);
});
