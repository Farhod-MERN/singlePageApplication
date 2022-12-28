import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

const Recipe = () => {
  const [reciepe, setReciepe] = useState([]);
  const [show, setShow]  = useState(false)
  const { id } = useParams();
  const { goBack } = useHistory();

  function ToggleShow(){
    setShow((prev)=>(!prev))
  }
  useEffect(() => {
    getMealById(id).then((data) => setReciepe(data.meals[0]));
  }, [id]);
  return (
    <>
      <div className="category">
      <button className="btn left pink category-btn" onClick={goBack}>
      <i className="material-icons">arrow_back</i>
      </button>
      </div>
      {!reciepe.idMeal 
      ? <Loader /> 
      : <div className="retsept">
            <h4>{reciepe.strMeal}</h4>
            <h6><b>Category : </b> {reciepe.strCategory}</h6>
            <h6><b>Area : </b> {reciepe.strArea ? (<span>{reciepe.strArea}</span>) : null} </h6>
            <div className="flex-div">
            <p className="">{reciepe.strInstructions}</p>
            <img clasName = "reciepe-img img" src={reciepe.strMealThumb} alt="" />
            </div>
            {reciepe.strYoutube ? (<div className="row flex-div">
            <iframe allowFullScreen title={id} src ={`https://www.youtube.com/embed/${reciepe.strYoutube.slice(-11)}`} frameborder="0"/>
            </div>): null }
            <span className="left show-btn" onClick={ToggleShow}>➕ Show reciepe</span>
            {
                show ? (<table className="centred">
                <thead>
                    <th>Ingredient</th>
                    <th>Measure</th>
                </thead>
                <tbody>
                    {
                        Object.keys(reciepe).map(key => {
                            if(key.includes("Ingredient") && reciepe[key]){
                               return(
                                <tr>
                                    <td>{reciepe[key]}</td>
                                    <td>{reciepe[`strMeasure${key.slice(13)}`]}</td>
                                </tr>
                               ) 
                            }
                            return ""
                        })
                    }
                </tbody>
            </table>) : null
            }
            
        </div>
      }
    </>
  );
};
export { Recipe };
