import { useState, useEffect } from 'react'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = ({ recipeId, onCancel, onSave }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)
  const recipe = useRecipeStore((state) =>
    state.recipes.find(recipe => recipe.id === recipeId)
  )

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title.trim() && description.trim()) {
      updateRecipe(recipeId, { title, description })
      onSave()
    }
  }

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>Edit Recipe</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Recipe Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
          style={{ 
            padding: '10px', 
            width: '100%', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          required
          style={{ 
            padding: '10px', 
            width: '100%', 
            height: '120px', 
            border: '1px solid #ddd', 
            borderRadius: '4px',
            fontSize: '16px',
            resize: 'vertical'
          }}
        />
      </div>

      <div>
        <button 
          type="submit"
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            marginRight: '10px',
            cursor: 'pointer'
          }}
        >
          Save Changes
        </button>
        <button 
          type="button" 
          onClick={onCancel}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditRecipeForm;