import { useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const DeleteRecipeButton = ({ recipeId, recipeTitle }) => {
  const navigate = useNavigate()
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${recipeTitle}"?`)) {
      deleteRecipe(recipeId)
      navigate('/')
    }
  }

  return (
    <button 
      onClick={handleDelete}
      style={{ 
        padding: '8px 16px', 
        backgroundColor: '#dc3545', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px'
      }}
    >
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton;