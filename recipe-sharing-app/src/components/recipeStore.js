import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],
  
  // Search functionality
  setSearchTerm: (term) => set({ searchTerm: term }),
  get filteredRecipes() {
    const { recipes, searchTerm } = get()
    if (!searchTerm) return recipes
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  },
  
  // Recipe CRUD operations
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  updateRecipe: (recipeId, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === recipeId ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes }),
  
  // Favorites functionality
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] }
    }
    return state
  }),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  isFavorite: (recipeId) => {
    return get().favorites.includes(recipeId)
  },
  
  // Recommendations functionality
  generateRecommendations: () => set((state) => {
    const { recipes, favorites } = state
    
    if (favorites.length === 0) {
      // If no favorites, return 2 random recipes
      const shuffled = [...recipes].sort(() => 0.5 - Math.random())
      return { recommendations: shuffled.slice(0, 2) }
    }
    
    // Find recipes similar to favorites based on title keywords
    const favoriteRecipes = recipes.filter(recipe => 
      favorites.includes(recipe.id)
    )
    
    // Extract common keywords from favorite titles
    const commonWords = favoriteRecipes.flatMap(recipe =>
      recipe.title.toLowerCase().split(' ').filter(word =>
        word.length > 3 && !['with', 'and', 'the', 'for'].includes(word)
      )
    )
    
    // Find recipes that share keywords with favorites (excluding favorites themselves)
    const recommendations = recipes
      .filter(recipe => 
        !favorites.includes(recipe.id) && // Don't recommend favorites
        commonWords.some(word => 
          recipe.title.toLowerCase().includes(word) ||
          recipe.description.toLowerCase().includes(word)
        )
      )
      .slice(0, 3) // Limit to 3 recommendations
    
    // If not enough recommendations, add random ones
    if (recommendations.length < 2) {
      const randomRecipes = recipes
        .filter(recipe => !favorites.includes(recipe.id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 2 - recommendations.length)
      
      return { recommendations: [...recommendations, ...randomRecipes] }
    }
    
    return { recommendations }
  })
}))

export { useRecipeStore };