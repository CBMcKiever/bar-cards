import { useIngredient } from "./api/getIngredient";
import { Text } from "@mantine/core";

export const Ingredient = () => {
  const { data, isLoading } = useIngredient();
  console.log(data);
  if (isLoading) {
    return <Text>Loading...</Text>
  }
    return <Text>{ isLoading ? "Loading..." : JSON.stringify(data?.data?.drinks) }</Text>
}
