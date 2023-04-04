import React from "react";
import { render, screen } from "@testing-library/react";
import BookPage from "./BookPage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: () => mockedUsedNavigate,
	useParams: () => ({
		id: "2zhwEAAAQBAJ",
	}),
}));

describe("BookPage tests", () => {
	it("renders progressBar on start", () => {
		render(<BookPage />);
		expect(screen.getByRole("progress-bar")).toBeInTheDocument();
	});

	it("renders title after fetch", async () => {
		render(<BookPage />);
		expect(
			await screen.findByAltText(
				"JavaScript и Node.js для Web-разработчиков"
			)
		).toBeInTheDocument();
		expect(await screen.findAllByText(/javascript/i)).toBeTruthy()
	});
});
