import React from "react";
import { screen, render } from "@testing-library/react";
import BookCard from "./BookCard";
import instanse from "./../../axios";
import { IBook } from "../../types/Book";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: () => mockedUsedNavigate,
}));

describe("BookCard tests", () => {
	it("BookCard renders book's title", async () => {
		const { data } = await instanse.get("2zhwEAAAQBAJ");
		const book: IBook = data;
		if (book)
			render(
				<BrowserRouter>
					<BookCard book={book} />
				</BrowserRouter>
			);
		expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
		expect(screen.getByAltText("book thumb")).toBeInTheDocument();
	});
});
