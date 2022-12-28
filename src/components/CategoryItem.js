import { Link } from "react-router-dom"
import { useState } from "react"

const CategoryItem = (props)=>{
    const [length, setLength] = useState(350)
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props
    //strCategory da bizning taom nomi turadi, filter qilganda faqat shu taomga oidlari chiqadi
    return(
        <div className="card" key={idCategory}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" alt="" src={strCategoryThumb} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4"><b>{strCategory}</b><i className="material-icons right small pink-text">content_paste</i></span>
        </div>
          <><Link to={`/category/${strCategory}`} className="btn margin-item pink">Category</Link></>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4"><b>{strCategory}</b><i className="material-icons right">close</i></span>
          <p>{strCategoryDescription.slice(0, length)} ...<span className="read-more" onClick={()=> setLength(1000)}>Read more</span></p>
        </div>
      </div>
             
    )
}
export {CategoryItem}