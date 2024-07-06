import { useIngredients } from "./api/getIngredient";
export const Ingredient = () => {
  const {
    ingredients,
    isLoading,
    isError,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
  } = useIngredients();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching ingredients</div>;

  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient?.id}>{ingredient?.name}</div>
      ))}
      <button onClick={previousPage} disabled={!hasPreviousPage}>
        Previous
      </button>
      <button onClick={nextPage} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
};
