import { useParams } from "react-router-dom";
import { useDrink } from "./api/getDrink";
import { mapDrinks } from "../../lib/drink-mapper";
import styles from './drink.module.css';
import { Title, List } from "@mantine/core";

export const Drink = () => {
  const { drinkId } = useParams();
  console.log(drinkId);
  const { data, isLoading, error } = useDrink(drinkId || '');
  const drink = mapDrinks(data?.data?.drinks)?.[0];
  console.log(data);
  return (
    <div className={styles.drinkContainer}>
      <div className={styles.drinkImageContainer}>
        <img src={drink?.thumbnailSource} className={styles.drinkImage} alt="Drink Image"></img>
      </div>
      <div className={styles.drinkDetail}>
        <Title order={1} c="#5474b4">{drink?.name}</Title>
        <Title order={2} c="#7C94C5">Ingredients</Title>
        <List>
          {drink?.ingredients.map(ingredient => <List.Item>{ingredient.measurement} {ingredient.name}</List.Item>)}
        </List> 
        <Title order={2} c="#7C94C5">Instructions</Title>
        <div>{drink?.instructions}</div>
      </div>
    </div>
  )
}
