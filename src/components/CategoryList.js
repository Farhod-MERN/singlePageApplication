import { CategoryItem } from "./CategoryItem"
import { Nothing } from "./Nothing"
const CategoryList = ({catolog = []})=>{
    return(
        <div className="list">
           {
            catolog.length ? ( catolog.map((el)=>(
                <CategoryItem key = {el.idCategory} {...el} />
            ))):
            <Nothing />
           }
        </div>
    )
}
export {CategoryList}