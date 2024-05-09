import { Card, Text, ColorPicker, Button } from "@mantine/core";
import { Drink } from "../../types/Drink";
import { Ingredient } from "../ingredient/ingredient";
import styles from "./drink-card.module.css";
import { useState } from "react";

export type DrinkCardProps = {
  drink: Drink;
  onImageLoad: () => void;
};

export const DrinkCard = ({ drink, onImageLoad }: DrinkCardProps) => {
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");
  return (
    <Card withBorder radius='xl'>
      <Card.Section>
        <div>
          <img
            className={styles.drinkImage}
            src={drink?.thumbnailSource}
            alt=''
            onLoad={onImageLoad}
          />
        </div>
      </Card.Section>
      <Text size='xl' fw={900} c='#5474b4'>
        {drink?.name}
      </Text>
      <Text>
        Made with:{" "}
        {drink?.ingredients
          .slice(0, 3)
          .map((ingredient) => ingredient.name)
          .join(", ")}
        ...
      </Text>
      <Button fullWidth radius='lg' mt='md' variant='light'>
        View Full Recipe
      </Button>
    </Card>
  );
};
