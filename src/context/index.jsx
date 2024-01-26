import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../api-communication";
import axios from "axios";



const GlobalState = createContext(null)



export const GlobalStateProvider = ({ children }) => {
    const [searchParam, setSearchParam] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")



    async function handleSearch(e) {
        const navigate = useNavigate()
        e.preventDefault()
        try {
            console.log(searchParam);
            const res = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            console.log(res.data.data.recipes);
            if (res.data.data.recipes) {
                setProducts(res.data.data.recipes)

            }

            navigate('/search')
            setSearchParam("")
        } catch (error) {

        }
    }

    const value = {
        searchParam,
        setSearchParam,
        products,
        setProducts,
        handleSearch,
    }


    return <GlobalState.Provider value={value}>{children}</ GlobalState.Provider>

}

export const useProduct = () => useContext(GlobalState)