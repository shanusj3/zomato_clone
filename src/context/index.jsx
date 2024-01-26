import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalState = createContext(null);

export const GlobalStateProvider = ({ children }) => {
    const [searchParam, setSearchParam] = useState("");
    const [products, setProducts] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [show, setShow] = useState(true)
    const [favarite, setFavarite] = useState([])




    async function handleSearch(e) {
        e.preventDefault();
        try {
            console.log(searchParam);
            const res = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            console.log(res.data.data.recipes);
            if (res.data.data.recipes) {
                setProducts(res.data.data.recipes);
                setShow(false)
            }
            setSearchParam("");
        } catch (error) {
            setError(error.message);
        }
    }

    async function AddToFavarite(item) {
        let copyFavarites = [...favarite]
        const index = copyFavarites.findIndex((val) => val.id === item.id)
        if (index === -1) {
            copyFavarites.push(item)

        } else {
            copyFavarites.splice(index)
        }
        setFavarite(copyFavarites)
    }

    const value = {
        searchParam,
        setSearchParam,
        products,
        setProducts,
        handleSearch,
        show,
        setShow,
        selectedItem,
        setSelectedItem,
        favarite,
        setFavarite,
        AddToFavarite
    };

    return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export const useProduct = () => useContext(GlobalState);
