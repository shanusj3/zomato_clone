import { createContext, useContext, useState } from "react";


const GlobalState = createContext(null)



export const GlobalStateProvider = ({ children }) => {
    const [searchParam, setSearchParam] = useState("")
    const [products, setProducts] = useState([])
    function handleSearch(e) {
        e.preventDefault()
        setSearchParam("")
        console.log(searchParam);
    }


    const value = {
        searchParam,
        setSearchParam,
        products,
        setProducts,
        handleSearch
    }

    return <GlobalState.Provider value={value}>{children}</ GlobalState.Provider>

}

export const useProduct = () => useContext(GlobalState)