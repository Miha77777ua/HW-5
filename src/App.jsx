import GlobalStyles from "./theme/globalStyles";
import { RecipesList } from "./components/Recipes/RecipesList";

import data from "./data/recipes.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <RecipesList data={data} />
    </>
  )
}

export default App
