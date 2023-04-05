import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...(jest.requireActual("react-router-dom") as any),
	useNavigate: () => mockedUsedNavigate,
}));

describe("App tests",()=>{
    it("App renders", ()=>{
        render(<App/>)
        expect(screen.getByTestId('app')).toBeInTheDocument()
    })
})