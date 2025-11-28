import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'
import { useState, useEffect } from 'react'

const RecipeDetails = () => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((state) =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  )
  const [isEditing, setIsEditing] = useState(false)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)
  const isFavorite = useRecipeStore((state) => state.isFavorite(parseInt(recipeId)))
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations)

  useEffect(() => {
    // Regenerate recommendations when favorites change
    if (recipe) {
      generateRecommendations()
    }
  }, [isFavorite, recipe, generateRecommendations])

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
          Back to Recipes
        </button>
        <h2>Recipe not found</h2>
      </div>
    )
  }

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id)
    } else {
      addFavorite(recipe.id)
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ marginBottom: '20px', padding: '8px 16px' }}
      >
        ← Back to Recipes
      </button>

      {isEditing ? (
        <EditRecipeForm 
          recipeId={recipe.id} 
          onCancel={() => setIsEditing(false)}
          onSave={() => setIsEditing(false)}
        />
      ) : (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
            <h1 style={{ margin: 0, color: '#333' }}>{recipe.title}</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button 
                onClick={handleFavoriteToggle}
                style={{ 
                  padding: '8px 16px', 
                  backgroundColor: isFavorite ? '#ffa500' : '#6c757d',
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                {isFavorite ? '★' : '☆'} {isFavorite ? 'Favorited' : 'Add to Favorites'}
              </button>
              <button 
                onClick={() => setIsEditing(true)}
                style={{ 
                  padding: '8px 16px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Edit
              </button>
              <DeleteRecipeButton 
                recipeId={recipe.id}
                recipeTitle={recipe.title}
              />
            </div>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#666', marginBottom: '10px' }}>Description</h3>
            <p style={{ 
              lineHeight: '1.6', 
              fontSize: '16px', 
              backgroundColor: '#f8f9fa', 
              padding: '15px', 
              borderRadius: '4px',
              borderLeft: '4px solid #007bff'
            }}>
              {recipe.description}
            </p>
          </div>

          <div style={{ color: '#666', fontSize: '14px' }}>
            <p>Recipe ID: {recipe.id}</p>
            <p>Created: {new Date(recipe.id).toLocaleDateString()}</p>
            <p>Status: {isFavorite ? '⭐ Favorited' : 'Not in favorites'}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeDetails;