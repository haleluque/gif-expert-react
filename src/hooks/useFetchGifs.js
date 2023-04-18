import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    /**
     * Primer argumento: codigo que se quiere ejecutar,
     * Segundo argumento: - Si se pone [], se indica que solo se quiere ejecutar una vez
     * Si se pone Retorno, es para desuscribirse o dejar de escuchar
    */
    useEffect(() => {
        assignGifs();
    }, [])   
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const assignGifs = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    }

    return {
        images,
        isLoading
    }
}
