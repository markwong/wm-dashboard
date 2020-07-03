import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // state to store our value
    // pass inital state function to useState so logic is only
    // executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // get from local storage by key
            const item = window.localStorage.getItem(key);

            // parse stored json or if non return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            // if error also return initialValue
            console.log(`Error in useLocalStorage(): ${err}`);
            return initialValue;
        }
    });

    // return a wrapper version of useState's setter function
    // that persists the new value to localStorage
    const setValue = (value) => {
        try {
            // allow value to be a function so we have same API
            // as useState
            const valueToStore = value instanceof Function
                                    ? value(storedValue)
                                    : value;
            
            // save state
            setStoredValue(valueToStore);

            // save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));

        } catch (err) {
            console.log(`Errror in LocalStorage setValue(): ${err}`);
        }
    }

    return [storedValue, setValue];
}