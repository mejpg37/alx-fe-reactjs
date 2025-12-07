import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }
    
    // Summary validation
    if (!formData.summary.trim()) {
      newErrors.summary = 'Short summary is required';
    } else if (formData.summary.length < 10) {
      newErrors.summary = 'Summary must be at least 10 characters';
    }
    
    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientLines = formData.ingredients.split('\n').filter(line => line.trim());
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'Please enter at least 2 ingredients';
      }
    }
    
    // Instructions validation
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    } else if (formData.instructions.length < 20) {
      newErrors.instructions = 'Instructions must be at least 20 characters';
    }
    
    // Prep time validation
    if (!formData.prepTime.trim()) {
      newErrors.prepTime = 'Prep time is required';
    }
    
    // Cook time validation
    if (!formData.cookTime.trim()) {
      newErrors.cookTime = 'Cook time is required';
    }
    
    // Servings validation
    if (!formData.servings.trim()) {
      newErrors.servings = 'Servings is required';
    } else if (isNaN(formData.servings) || parseInt(formData.servings) < 1) {
      newErrors.servings = 'Please enter a valid number of servings';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Recipe Data Submitted:', {
        ...formData,
        ingredients: formData.ingredients.split('\n').filter(line => line.trim()),
        id: Date.now() // Generate unique ID
      });
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form and redirect after 3 seconds
      setTimeout(() => {
        setFormData({
          title: '',
          summary: '',
          image: '',
          ingredients: '',
          instructions: '',
          prepTime: '',
          cookTime: '',
          servings: ''
        });
        setErrors({});
        setSubmitSuccess(false);
        navigate('/');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Share Your Recipe
          </h1>
          <p className="text-gray-600 text-lg">
            Add your delicious recipe to our collection and inspire others
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Recipe submitted successfully! Redirecting to home page...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Form Instructions */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Tips for Great Recipes</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Be specific with measurements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Include step-by-step instructions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Use clear, descriptive titles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Add cooking tips and variations</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-blue-400">
                <h3 className="text-lg font-semibold mb-3">Required Fields</h3>
                <p className="text-sm text-blue-100">
                  Fields marked with <span className="text-red-400 font-bold">*</span> are required.
                  All other fields are optional but recommended for better recipe presentation.
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="md:w-2/3 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Recipe Title */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Recipe Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Spaghetti Carbonara"
                  />
                  {errors.title && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {errors.title}
                    </p>
                  )}
                </div>

                {/* Recipe Summary */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
                    Short Summary <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    rows="2"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.summary ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Brief description of your recipe"
                  />
                  {errors.summary && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {errors.summary}
                    </p>
                  )}
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="https://example.com/your-recipe-image.jpg"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Optional: Add a direct link to your recipe image
                  </p>
                </div>

                {/* Cooking Times */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prepTime">
                      Prep Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="prepTime"
                      name="prepTime"
                      value={formData.prepTime}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.prepTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="e.g., 15 mins"
                    />
                    {errors.prepTime && (
                      <p className="mt-2 text-sm text-red-600">{errors.prepTime}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cookTime">
                      Cook Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="cookTime"
                      name="cookTime"
                      value={formData.cookTime}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.cookTime ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="e.g., 30 mins"
                    />
                    {errors.cookTime && (
                      <p className="mt-2 text-sm text-red-600">{errors.cookTime}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="servings">
                      Servings <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="servings"
                      name="servings"
                      value={formData.servings}
                      onChange={handleChange}
                      min="1"
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.servings ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="e.g., 4"
                    />
                    {errors.servings && (
                      <p className="mt-2 text-sm text-red-600">{errors.servings}</p>
                    )}
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-700 text-sm font-bold" htmlFor="ingredients">
                      Ingredients <span className="text-red-500">*</span>
                    </label>
                    <span className="text-sm text-gray-500">(Enter each ingredient on a new line)</span>
                  </div>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-mono ${
                      errors.ingredients ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder={`400g spaghetti\n200g pancetta\n4 large eggs\n100g grated cheese\nBlack pepper`}
                  />
                  {errors.ingredients && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {errors.ingredients}
                    </p>
                  )}
                </div>

                {/* Instructions */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-700 text-sm font-bold" htmlFor="instructions">
                      Instructions <span className="text-red-500">*</span>
                    </label>
                    <span className="text-sm text-gray-500">(Step-by-step instructions)</span>
                  </div>
                  <textarea
                    id="instructions"
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    rows="7"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.instructions ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder={`1. Boil water in a large pot...\n2. Cook pasta until al dente...\n3. Prepare the sauce while pasta cooks...`}
                  />
                  {errors.instructions && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {errors.instructions}
                    </p>
                  )}
                </div>

                {/* Form Actions */}
                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Cancel
                  </button>
                  
                  <div className="space-x-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          title: '',
                          summary: '',
                          image: '',
                          ingredients: '',
                          instructions: '',
                          prepTime: '',
                          cookTime: '',
                          servings: ''
                        });
                        setErrors({});
                      }}
                      className="px-6 py-3 border border-red-300 text-red-700 font-medium rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                    >
                      Clear Form
                    </button>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ${
                        isSubmitting 
                          ? 'bg-blue-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                      } flex items-center justify-center min-w-[140px]`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Submit Recipe
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Form Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Form Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <p className="font-medium mb-1">Ingredients Format:</p>
              <p>Enter each ingredient on a new line. Include measurements (e.g., "2 cups flour", "1 tsp salt").</p>
            </div>
            <div>
              <p className="font-medium mb-1">Instructions Format:</p>
              <p>Number each step clearly. Be specific about temperatures, times, and techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;