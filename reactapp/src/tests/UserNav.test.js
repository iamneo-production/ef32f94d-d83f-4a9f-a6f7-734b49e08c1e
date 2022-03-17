import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserNavbar from "../components/UserNav/UserNav";
import { MemoryRouter } from 'react-router-dom';

describe('UserNavbar Component', () => {
    
    const userNav = render(<MemoryRouter><UserNavbar /></MemoryRouter>);

    const medCartButton = screen.queryByTestId('medCartButton');
    const medHomeButton = screen.queryByTestId('medHomeButton');
    const medOrderButton = screen.queryByTestId('medOrderButton');
    const logoutButton = screen.queryByTestId('logoutButton');
    const userNavbar = screen.queryByTestId('userNavbar');

    test('feUserNavbar1', () => {
        expect(medCartButton).toBeTruthy();
        expect(medHomeButton).toBeTruthy();
        expect(medOrderButton).toBeTruthy();
        expect(logoutButton).toBeTruthy();
        expect(userNavbar).toBeTruthy();
    });

})