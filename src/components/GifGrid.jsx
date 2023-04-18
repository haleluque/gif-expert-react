import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    //Se creo un custom hook para administrar los gifs
    const {images, isLoading} = useFetchGifs(category);
  
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className=".card-grid">
                {
                    //spread operator se usa para enviar cada una de las propiedades del objeto como props al componente
                    images.map((image) => (
                        <GifItem 
                            key={image.id} 
                            { ...image } />
                    ))
                }
            </div>
        </>
    )
}