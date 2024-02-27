import { useState } from "react";

/**
 * @typedef {Object} Options
 * @property {('local'|'session')} [storage='local'] - Type of storage to use
 * @property {string} key - Key to use in storage
 * @property {*} initial - Initial value
 */

/**
 * @typedef {Object} SetValueFunction
 * @property {function(*): void} set - Function to set the value in storage
 */

/**
 * @typedef {Object} ClearValueFunction
 * @property {function(): void} clear - Function to clear the value in storage
 */

/**
 * @param {Options} options - Options for the hook
 * @returns {[*, SetValueFunction, ClearValueFunction]} - Returns the value, set function, and clear function
 */


const useBrowserStorage = ({ storage = "local", key, initial }) => {
  const storageApi = storage === "local" ? localStorage : sessionStorage;
  const [value, setValue] = useState(() => {
    try {
      const item = storageApi.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch (error) {
      console.error(error);
      return initial;
    }
  });
  const set = (val) => {
    const newValue = { ...value, ...val }
    storageApi.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  }
  const clear = () => {
    storageApi.removeItem(key);
    setValue(initial);
  }
  return [value, set, clear];
}

export default useBrowserStorage;