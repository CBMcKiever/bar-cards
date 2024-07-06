import { IngredientSource } from "../types/IngredientSource";
import { IngredientDetail } from "../types/Ingredient";

export const mapIngredient = (ingredient: IngredientSource): IngredientDetail => {
    return {
      id: Number(ingredient.idIngredient),
      name: ingredient.strIngredient || '',
      description: ingredient.strDescription || '',
      type: ingredient.strType || '',
      alcoholic: ingredient.strAlcohol === "Yes",
      avgABV: Number(ingredient.strABV)
    }
}
