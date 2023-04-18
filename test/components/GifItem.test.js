import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react"

describe('Pruebas componenete GifItem', () => { 
    const title = "Saitama";
    const url = "https://www.url.com/";
    
    test('Debe hacer match con el snapshot', () => { 
        const {container} = render( <GifItem title={title} url={url} /> )
        expect(container).toMatchSnapshot();
     });

    test('Debe mostrar la imagen con el url y alt indicado', () => { 
        render( <GifItem title={title} url={url} /> )
        //screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

    test('El titulo debe mostrarse como texto', () => { 
        render( <GifItem title={title} url={url} /> )
        expect(screen.getByText(title)).toBeTruthy();
    });
 })