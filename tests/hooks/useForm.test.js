import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe('pruebas en useForm', () => {

    const initialForm = {
        name: "Juan Pablo",
        email: "juan@google.ocm"
    }

    test('debe de regresar la información por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function),
            onResetForm: expect.any( Function )
        });

    });

    test('debe de cambiar el nombre del formulario', () => { 

        const newValue = 'Lina'; 
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name', value: newValue
                }
            });
        });

        //expect, result.current.name === juan
        expect(result.current.name).toEqual(newValue);
        //expect, result.current.formState.name === juanKU
        expect(result.current.formState.name).toEqual(newValue); 
    }); 

    test('debe de resetear el valor inicial del formulario', () => { 

        const newValue = 'Lina'; 
        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm, onInputChange } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name', value: newValue
                }
            });
            onResetForm(); 
        });

        //expect, result.current.name === juan
        expect(result.current.name).toBe(initialForm.name);
        //expect, result.current.formState.name === juanKU
        expect(result.current.formState.name).toBe(initialForm.name); 
    }); 

}); 