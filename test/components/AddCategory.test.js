import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas del componente AddCategory', () => { 

    const inputValue = 'Saitama';

    test('debe cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onSetCategory={ () => {}} /> );
        const input = screen.getByRole('textbox');

        //Disparamos el evento Input text 
        fireEvent.input( input, { target: { value: inputValue}} );

        expect(input.value).toBe('Saitama');

        //screen.debug();
    });
    
    test('debe de llamar onSetCategory si el input tiene valor', () => {
        //mock de una funcion
        const onSetCategory = jest.fn();

        render( <AddCategory onSetCategory={ onSetCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue}} );
        fireEvent.submit( form );

        expect(input.value).toBe('');
        //esperar que la funcion haya sido llamada, y solo una llamada
        expect(onSetCategory).toHaveBeenCalled();
        expect(onSetCategory).toHaveBeenCalledTimes(1);

        //ahora que el valor que recibio sea el enviado 
        expect(onSetCategory).toHaveBeenCalledWith(inputValue);
    })

    test('NO debe de llamar onSetCategory si el input esta vacío', () => {
        const onSetCategory = jest.fn();

        render( <AddCategory onSetCategory={ onSetCategory } /> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect(onSetCategory).not.toHaveBeenCalled();
    })
})