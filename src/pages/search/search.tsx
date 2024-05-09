import styles from "./search.module.css";
import { SearchResults } from "./components/search-results";

export const DrinkSearch = () => {
  return (
    <div className={styles.searchContainer}>
      <h1>Drink Search</h1>
      <div>search bar</div>
      <SearchResults />
    </div>
  );
};
