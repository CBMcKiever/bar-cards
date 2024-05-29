import { useParams } from "react-router-dom";
import { useDrink } from "./api/getDrink";
import { mapDrinks } from "../../lib/drink-mapper";


export const Drink = () => {
  const { drinkId } = useParams();
  console.log(drinkId);
  const { data, isLoading, error } = useDrink(drinkId || '');
  const drink = mapDrinks(data?.data?.drinks);
  console.log(data);
  return (
    <div className="drinkContainer">

    </div>
  )
}
