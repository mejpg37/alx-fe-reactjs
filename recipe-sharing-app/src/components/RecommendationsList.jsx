import { useEffect } from 'react'
import { useRecipeStore } from './recipeStore'
import { Link } from 'react-router-dom'

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations)
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations)
  const favorites = useRecipeStore((state) => state.favorites)
  
  useEffect(() => {
    generateRecommendations()
  }, [favorites, generateRecommendations])

  if (recommendations.length === 0) {
    return null
  }

  return (
    <div style={{ 
      margin: '20px 0', 
      padding: '25px', 
      border: '2px solid #4CAF50', 
      backgroundColor: '#f0f8f0',
      borderRadius: '12px'
    }}>
      <h2 style={{ 
        margin: '0 0 20px 0', 
        color: '#2e7d32',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        🍽️ Recommended For You
      </h2>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {recommendations.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #4CAF50', 
            padding: '15px', 
            backgroundColor: 'white',
            borderRadius: '8px'
          }}>
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{ 
                textDecoration: 'none', 
                color: '#007bff',
                display: 'block',
                marginBottom: '8px'
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
              {recipe.description.length > 120 
                ? `${recipe.description.substring(0, 120)}...` 
                : recipe.description
              }
            </p>
          </div>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '15px', 
        fontSize: '12px', 
        color: '#666',
        fontStyle: 'italic'
      }}>
        Recommendations are based on your favorite recipes and shared ingredients.
      </div>
    </div>
  )
}

export default RecommendationsList;