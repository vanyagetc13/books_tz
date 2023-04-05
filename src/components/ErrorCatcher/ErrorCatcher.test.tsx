import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorCatcher from "./ErrorCatcher";

jest.mock("../../store/errors", () => ({
	...(jest.requireActual("../../store/errors") as any),
	errors: [{ code: 7879888, text: "test", id: 0 }],
}));

describe("ErrorCatcher tests", () => {
	it("renders component", () => {
		render(<ErrorCatcher />);
		expect(screen.getByTestId("error_catcher")).toBeInTheDocument();
	});

	it("renders an error", () => {
        render(<ErrorCatcher/>)
        expect(screen.getByText(/7879888/)).toBeInTheDocument()
        expect(screen.getByText('test')).toBeInTheDocument()
    });
});
