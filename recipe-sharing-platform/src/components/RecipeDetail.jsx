import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Recipe Not Found</h2>
          <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
          >
            ← Back to All Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Recipes
          </Link>
        </div>

        {/* Recipe Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{recipe.title}</h1>
                  <p className="text-gray-600 text-lg">{recipe.summary}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-700">{recipe.prepTime}</div>
                  <div className="text-sm text-blue-600 font-medium mt-1">Prep Time</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-700">{recipe.cookTime}</div>
                  <div className="text-sm text-green-600 font-medium mt-1">Cook Time</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-700">{recipe.servings}</div>
                  <div className="text-sm text-orange-600 font-medium mt-1">Servings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Ingredients</h2>
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {recipe.ingredients.length} items
                </span>
              </div>
              
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start group">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{ingredient}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Use fresh ingredients for best results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Measure ingredients accurately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Adjust seasoning to taste</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Instructions</h2>
                <span className="text-sm font-medium text-gray-500">
                  Step by step
                </span>
              </div>
              
              <div className="space-y-8">
                {recipe.instructions.map((step, index) => (
                  <div key={index} className="flex group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-6 pt-2">
                      <div className="text-lg font-medium text-gray-900 mb-2">Step {index + 1}</div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Notes Section */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chef's Notes</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <p className="text-gray-700">
                    This recipe can be customized to your taste. Feel free to adjust spices, 
                    substitute ingredients, or modify cooking times based on your preference. 
                    Don't be afraid to experiment and make it your own!
                  </p>
                </div>
              </div>
              
              {/* Share Button */}
              <div className="mt-8 flex justify-center">
                <button className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share This Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;