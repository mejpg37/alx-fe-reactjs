//RecipeList 
import { useRecipeStore } from './recipeStore.js'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add your first recipe above!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #eee', margin: '10px 0', padding: '15px', borderRadius: '4px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{recipe.title}</h3>
            <p style={{ margin: 0 }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList;
