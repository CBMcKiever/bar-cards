import { useQueries, useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useState } from "react";
import { mapIngredient } from "../../../lib/ingredient-mapper";
const ITEMS_PER_PAGE = 25;

const fetchIngredientList = async (): Promise<string[]> => {
  const response = await Axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  console.log("RESPONSE: ", response);
  return  response.data.drinks.map(ingredientObj => ingredientObj.strIngredient1);
}

const fetchIngredientDetail = async (name: string) => {
  const response = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
  return mapIngredient(response.data.ingredients[0]);
}

export const useIngredients = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data: ingredientNames = [] } = useQuery({ queryKey: ['ingredientlist'], queryFn: fetchIngredientList, staleTime: Infinity});

  const paginatedNames = ingredientNames.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const ingredientQueries = useQueries({
    queries: paginatedNames.map((name) => ({
      queryKey: ['ingredient', name],
      queryFn: () => fetchIngredientDetail(name),
    }))
  });

  const isLoading = ingredientQueries.some((query) => query.isLoading);
  const isError = ingredientQueries.some((query) => query.isError);
  const ingredients = ingredientQueries.map((query) => query.data).filter(Boolean);

  const nextPage = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < ingredientNames.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    ingredients,
    isLoading,
    isError,
    nextPage,
    previousPage,
    hasNextPage: (currentPage + 1) * ITEMS_PER_PAGE < ingredientNames.length,
    hasPreviousPage: currentPage > 0,
  };
};
