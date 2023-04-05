import React from "react";
import { fireEvent, prettyDOM, render, screen, waitFor } from "@testing-library/react";
import SearchPage from "./SearchPage";
import MyHeader from "../../components/MyHeader/MyHeader";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: () => mockedUsedNavigate,
}));

describe("SearchPage tests", () => {
	it("renders SearchPage", () => {
		render(<SearchPage />);
		expect(screen.getByText(/Results found/i)).toBeInTheDocument();
	});

	it("finds any books after search", async () => {
		render(<MyHeader />);
		render(<SearchPage />);
		fireEvent.change(screen.getByPlaceholderText(/поиск/i), {
			target: { value: "js" },
		});
		fireEvent(
			screen.getByText(/искать/i),
			new MouseEvent("click", {
				bubbles: true,
				cancelable: true,
			})
		);
		expect(
			await screen.findAllByText(/node\.js/i, undefined, {
				timeout: 5000,
			})
		).toBeTruthy();
		await waitFor(()=>{
			prettyDOM()
		}, {timeout: 5000})
	});
});
