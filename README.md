# browser-storages

A custom React hook for interacting with Web Storage (localStorage and sessionStorage).

## Installation

Install `browser-storages` using npm:

```bash
npm install browser-storages


import useBrowserStorage from 'browser-storages';

// Then, you can use it in your components:
const [value, set, clear] = useBrowserStorage({ storage: "local", key: "myKey", initial: {} });

Usage

API
useBrowserStorage(options)
The useBrowserStorage function takes an options object with the following properties:

storage: (optional) A string that specifies the type of Web Storage to use. Can be either "local" for localStorage or "session" for sessionStorage. Defaults to "local".

key: A string that specifies the key to use in the Web Storage.

initial: The initial value to use when the key is not yet present in the Web Storage.

The function returns an array with three elements:

value: The current value from the Web Storage. If the key is not present in the Web Storage, this will be the initial value.

set: A function that takes a value and updates the value in the Web Storage. The new value is merged with the old value using the spread operator (...), so it's possible to partially update the value if it's an object.

clear: A function that removes the key from the Web Storage and sets the value back to the initial value.

Error Handling :
If there's an error while getting or setting the value in the Web Storage (for example, if the value is not valid JSON), the error will be logged to the console and the value will be set to the initial value.

License
ISC
```
