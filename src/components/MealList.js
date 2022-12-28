import { MealItem } from "./MealItem";
import { useHistory } from "react-router-dom";
const MealList = ({ meals }) => {
  const { goBack } = useHistory();
  return (
    <>
      <div className="list">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </div>
      <div className="category">
          <span className="category-btn btn left pink" onClick={goBack}>
            <i className="material-icons">arrow_back</i>
          </span>
        </div>
    </>
  );
};
export { MealList };
