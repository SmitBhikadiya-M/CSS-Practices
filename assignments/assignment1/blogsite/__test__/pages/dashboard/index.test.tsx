import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";


describe('Dashboard Page', () => {
    it('Should render properly', () => {

        render(<Home />)

        const header = screen.getByRole('heading');
        const headerText = 'Dashboard';

        expect(header).toHaveTextContent(headerText);
    })
})