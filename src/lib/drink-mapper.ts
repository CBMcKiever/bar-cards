import { DrinkSource } from '../types/DrinkSource'
import { Drink, Ingredient } from '../types/Drink'

export const mapDrinks = (drinkSources: DrinkSource[]): Drink[] => {
    return drinkSources?.map((drink) => ({
        id: Number(drink.idDrink),
        name: drink.strDrink || '',
        category: drink.strCategory || '',
        isAlcoholic: drink.strAlcoholic?.toLowerCase() === 'alcoholic',
        glassType: drink.strGlass || '',
        instructions: drink.strInstructions || '',
        ingredients: mapIngredients(drink),
        thumbnailSource: drink.strDrinkThumb || '',
    }))
}

const mapIngredients = (drink: DrinkSource): Ingredient[] => {
    let ingredients: Ingredient[] = []
    for (let i = 1; i < 16; i++) {
        const ingredientIndex = `strIngredient${i}`
        const measurementIndex = `strMeasure${i}`
        if (drink[ingredientIndex as keyof DrinkSource] === null) {
            break
        }

        ingredients = [
            ...ingredients,
            {
                name: drink[ingredientIndex as keyof DrinkSource] || '',
                measurement: drink[measurementIndex as keyof DrinkSource],
            },
        ]
    }

    return ingredients
}
