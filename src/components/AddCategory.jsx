import { useState } from "react";
import PropTypes from 'prop-types';

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

    //aria-label necesario para que se pueda buscar el formulario en los test (by role)
    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar Gifs"
                onChange={ onInputChange }
                value={ inputValue ?? '' }
            />
        </form>
    )
}

AddCategory.prototypes = {
    onSetCategory : PropTypes.func.isRequired
}
