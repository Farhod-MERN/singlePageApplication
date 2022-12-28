import { useState, useEffect } from "react"
import { Loader } from "../components/Loader"
import {getAllCategories} from "../api"
import { CategoryList } from "../components/CategoryList"
import { Search } from "../components/Search"
import { useLocation, useHistory } from "react-router-dom"

const Home = ()=>{

    const [catolog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const {pathname, search} = useLocation()
    const {push} = useHistory()



    const handleSearch = (inputValue)=>{
        setFilteredCatalog(catolog.filter(item =>(item.strCategory.toLowerCase().includes(inputValue.toLowerCase()))))
        push({
            pathname,
            search: `?search=${inputValue}`
        })
    }
    useEffect(()=>{
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(search ? 
                data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split("=")[1].toLowerCase())) : data.categories)
        })
    }, [search])

    return(
        <>
        <Search cb={handleSearch} />
            {
                !catolog.length ? <Loader /> : <CategoryList catolog = {filteredCatalog} />
            }
        </>
    )
}
export {Home}