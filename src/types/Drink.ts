export type Drink = {
    id: number | null
    name: string
    category: string
    isAlcoholic: boolean
    glassType: string
    instructions: string
    ingredients: Ingredient[]
    thumbnailSource: string
}

export type Ingredient = {
    name: string
    measurement: string | null
}
