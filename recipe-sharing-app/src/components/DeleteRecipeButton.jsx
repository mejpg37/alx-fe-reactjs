import { useRecipeStore } from './recipeStore'

const DeleteRecipButton = ({ recipeId, recipeTitle, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${recipeTitle}"?`)) {
      deleteRecipe(recipeId)
      if (onDelete) {
        onDelete()
      }
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
      title={`Delete ${recipeTitle}`}
    >
      Delete Recipe
    </button>
  )
}

export default DeleteRecipButton;