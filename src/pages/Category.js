import { useParams} from "react-router-dom"
import { filterByCategory } from "../api"
import { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { MealList } from "../components/MealList"
const Category  = ()=>{
    const {name} = useParams()  // App dagi Category componentning Pathidan kelayotgan name ni ushlab olamiz
    //useParams orqali dinamic Appdan kelayotgan malumotlarni ushlab olamiz
    const [meals, setMeals] = useState([])
    // console.log(meals);
    useEffect(()=>{
        filterByCategory(name).then(data => (setMeals(data.meals)))
    }, [name])

    return(
    <div>
       {
        !meals.length ? <Loader /> : <MealList meals = {meals}/>
       }
    </div>        
    )
}
export {Category}