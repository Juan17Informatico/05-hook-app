import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContect/MainApp";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el homePage', () => { 
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Home')).toBeTruthy();

    }); 

    test('debe de mostrar el Login', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        
        expect(screen.getByText('Login Page')).toBeTruthy();

    }); 

}); 