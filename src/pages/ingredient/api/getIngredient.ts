import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const getIngredient = () => {
  return Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
}

export const useIngredient = () => {
  return useQuery({ queryKey: ['ingredient'], queryFn: getIngredient });
};
