import { useState } from "react"
//No hay que poner explicitante el archivo de barril (index.js), ya que lo reconoce por defecto
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One piece'
  ]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        <h1>Gif App</h1>

        <AddCategory onSetCategory={addCategory} />

        {
            categories.map( category => 
            (
                <GifGrid 
                    key={category} 
                    category={category} />
            ))
        }
    </>
  )
}
