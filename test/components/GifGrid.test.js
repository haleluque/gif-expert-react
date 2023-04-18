import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Aqui se le dice que haga un mock completo de nuestro path, en este caso el hook
jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas del componente GifGrid', () => { 

    const category = 'One punch';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan las imagenes del hook', () => { 
        
        const gifs = [
            {
                id: 'abc',
                title: 'saitama',
                url: 'url'
            },
            {
                id: 'abc2',
                title: 'goku',
                url: 'url2'
            }
        ];
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        //screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
    })
 })