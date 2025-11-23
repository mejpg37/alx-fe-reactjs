import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipButton from './DeleteRecipButton'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const [editingId, setEditingId] = useState(null)

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Recipe List ({recipes.length})</h2>
      {recipes.length === 0 ? (
        <p style={{ 
          padding: '20px', 
          textAlign: 'center', 
          color: '#666', 
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>
          No recipes available.
        </p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #eee', 
            margin: '15px 0', 
            padding: '15px', 
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {editingId === recipe.id ? (
              <EditRecipeForm 
                recipeId={recipe.id} 
                onCancel={() => setEditingId(null)}
                onSave={() => setEditingId(null)}
              />
            ) : (
              <>
                <Link 
                  to={`/recipe/${recipe.id}`}
                  style={{ 
                    textDecoration: 'none', 
                    color: '#007bff',
                    display: 'block',
                    marginBottom: '10px'
                  }}
                >
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{recipe.title}</h3>
                </Link>
                <p style={{ 
                  margin: '0 0 15px 0', 
                  color: '#555',
                  lineHeight: '1.5'
                }}>
                  {recipe.description}
                </p>
                <div>
                  <button 
                    onClick={() => setEditingId(recipe.id)}
                    style={{ 
                      marginRight: '10px', 
                      padding: '8px 16px', 
                      backgroundColor: '#17a2b8', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Edit
                  </button>
                  <DeleteRecipButton 
                    recipeId={recipe.id}
                    recipeTitle={recipe.title}
                  />
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList;