import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const getDrink = (drinkId: string) => {
  console.log('drinkId: ', drinkId);
  return Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
}

export const useDrink = (drinkId: string) => {
  return useQuery({ queryKey:['drink'], queryFn: () => getDrink(drinkId)});
};
