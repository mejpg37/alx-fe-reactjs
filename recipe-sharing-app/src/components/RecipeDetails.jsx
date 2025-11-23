import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import { useState } from 'react'

const RecipeDetails = () => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((state) =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  )
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const [isEditing, setIsEditing] = useState(false)

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

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipe.id)
      navigate('/')
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
            <div>
              <button 
                onClick={() => setIsEditing(true)}
                style={{ 
                  marginRight: '10px', 
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
              <button 
                onClick={handleDelete}
                style={{ 
                  padding: '8px 16px', 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
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
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeDetails;