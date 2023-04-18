import { useState } from "react"

export const AddCategory = ({onSetCategory}) => {

    const [inputValue, setInputValue] = useState("");
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //previene que se haga un refresh sobre la pagina cuando se dispara el evento
        event.preventDefault();
        if(inputValue.trim().length <= 0) return;
        onSetCategory(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                onChange={ onInputChange }
                value={ inputValue ?? '' }
            />
        </form>
    )
}
