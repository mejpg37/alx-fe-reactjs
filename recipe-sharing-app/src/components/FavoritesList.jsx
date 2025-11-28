import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites)
  const recipes = useRecipeStore((state) => state.recipes)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)
  
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id))

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ 
        margin: '20px 0', 
        padding: '25px', 
        border: '2px dashed #ffd700', 
        backgroundColor: '#fffdf0',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          margin: '0 0 15px 0', 
          color: '#b8860b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          ⭐ My Favorites
        </h2>
        <p style={{ 
          margin: 0, 
          color: '#8b7500',
          fontSize: '16px'
        }}>
          No favorite recipes yet. Click the star icon on any recipe to add it to favorites!
        </p>
      </div>
    )
  }

  return (
    <div style={{ 
      margin: '20px 0', 
      padding: '25px', 
      border: '2px solid #ffd700', 
      backgroundColor: '#fff9e6',
      borderRadius: '12px'
    }}>
      <h2 style={{ 
        margin: '0 0 20px 0', 
        color: '#b8860b',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        ⭐ My Favorites ({favoriteRecipes.length})
      </h2>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #ffd700', 
            padding: '15px', 
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{ 
                  textDecoration: 'none', 
                  color: '#007bff',
                  display: 'block',
                  marginBottom: '5px'
                }}
              >
                <h3 style={{ margin: 0, fontSize: '18px' }}>{recipe.title}</h3>
              </Link>
              <p style={{ 
                margin: 0, 
                color: '#666',
                fontSize: '14px',
                lineHeight: '1.4'
              }}>
                {recipe.description.length > 100 
                  ? `${recipe.description.substring(0, 100)}...` 
                  : recipe.description
                }
              </p>
            </div>
            
            <button 
              onClick={() => removeFavorite(recipe.id)}
              style={{ 
                padding: '8px 12px', 
                backgroundColor: '#ffa500', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                marginLeft: '15px'
              }}
              title="Remove from favorites"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesList;