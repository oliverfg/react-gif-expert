import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target: {value}}) => {
        setInputValue(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if (newValue.length <= 1) return;
        onNewCategory(newValue);
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}