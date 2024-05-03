import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import MyComponent from "./MyComponent";

jest.mock("axios");

const mockData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    quote: {
      USD: {
        price: 50000,
      },
    },
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    quote: {
      USD: {
        price: 2000,
      },
    },
  },
];

describe("MyComponent", () => {
  it("renders data fetched from API", async () => {
    axios.get.mockResolvedValueOnce({ data: { data: mockData } });

    render(<MyComponent />);

    await waitFor(() => {
      expect(screen.getByText("Bitcoin")).toBeInTheDocument();
      expect(screen.getByText("BTC")).toBeInTheDocument();
      expect(screen.getByText("50000")).toBeInTheDocument();

      expect(screen.getByText("Ethereum")).toBeInTheDocument();
      expect(screen.getByText("ETH")).toBeInTheDocument();
      expect(screen.getByText("2000")).toBeInTheDocument();
    });
  });

  it("handles API error", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    render(<MyComponent />);

    await waitFor(() => {
      expect(
        screen.getByText(`Error fetching data: ${errorMessage}`)
      ).toBeInTheDocument();
    });
  });
});
