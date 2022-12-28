import { Link } from "react-router-dom"

const MealItem = (props)=>{

    const {strMeal, idMeal, strMealThumb } = props
    return(
        
  <div className="card" key={idMeal}>
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={strMealThumb} alt=""/>
  </div>
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4"><b>{strMeal}</b><i className="material-icons right pink-text">content_paste</i></span>
  </div>
    <Link to={`/meal/${idMeal}`} className="btn margin-item pink">RECIEPE</Link>
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4"><b>{strMeal}</b><i className="material-icons right">close</i></span>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quaerat natus eum, praesentium vitae, optio quia nemo ab recusandae, iste dolores numquam totam incidunt nam esse sequi. Ad, animi molestiae?</p>
  </div>
</div>
    )
}
export {MealItem}