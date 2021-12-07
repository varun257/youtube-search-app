import React, { useState, useCallback } from "react";
import classes from './Input.module.css';
import { debounce } from "lodash";

/**
 * 
 * @param {*} props 
 * @returns Input component to search text
 */
const Input = (props) => {
    const inputSearchHandler = (e) => {
        props.setSearchText(e.target.value);
        debounceInputSearch(props.searchText)
    }
    const debounceInputSearch = useCallback(debounce((text) => {
        props.onSearchSubmit(text);
    }, 1000), []);

    return (<div className={classes.input}>
        <input
            className={classes.input}
            value={props.searchText}
            name="search"
            data-testid="search"
            type="text"
            placeholder="Enter your search keyword here"
            onChange={inputSearchHandler}
            autoFocus/>
    </div>);
}

export default Input;
