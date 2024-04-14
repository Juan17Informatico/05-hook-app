import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch'); 

describe('pruebas en <MultipleCustomHooks />', () => { 

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        

        render(<MultipleCustomHooks/>); 
        
        const nextButton = screen.getByRole('button', {name: 'Siguientes'});
        
        expect(screen.getByText('Cargando...')); 
        expect(screen.getByText('Información de Pokémon')); 
        
        // console.log(nextButton.disabled);
        expect(nextButton.disabled).toBeFalsy();


     });



})