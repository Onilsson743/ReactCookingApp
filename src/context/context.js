import {createContext} from 'react';

const Context = createContext({
    addToCart: () => {},
    recipies: [],
    shoppingCart: [],
})
export default Context