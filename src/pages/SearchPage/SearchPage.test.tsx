import React from "react";
import { render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";

describe("SearchPage tests", () => {
	it("renders SearchPage", () => {
		render(<SearchPage />);
        expect(screen.getByText(/Results found/i)).toBeInTheDocument()
	})
});
