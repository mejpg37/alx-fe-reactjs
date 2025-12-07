import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: '',
    ingredients: '',
    steps: '', // Changed from instructions to steps
    prepTime: '',
    cookTime: '',
    servings: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Explicitly using event.target.value as required
  const handleChange = (event) => {
    const { name, value } = event.target;
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
    
    // Steps validation (changed from instructions)
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    } else if (formData.steps.length < 20) {
      newErrors.steps = 'Steps must be at least 20 characters';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
        steps: formData.steps, // Use steps instead of instructions
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
          steps: '',
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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Add New Recipe
          </h1>
          <p className="text-gray-600 text-lg">
            Share your delicious recipe with the community
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {submitSuccess && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <div className="flex">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Recipe Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange} // Using event.target.value via handleChange
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter recipe title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Recipe Summary */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
                Short Description *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange} // Using event.target.value via handleChange
                rows="2"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.summary ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Brief description of your recipe"
              />
              {errors.summary && (
                <p className="mt-1 text-sm text-red-600">{errors.summary}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                Ingredients *
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange} // Using event.target.value via handleChange
                rows="4"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter each ingredient on a new line"
              />
              {errors.ingredients && (
                <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
                Preparation Steps *
              </label>
              <textarea
                id="steps"
                name="steps" // Changed to steps from instructions
                value={formData.steps}
                onChange={handleChange} // Using event.target.value via handleChange
                rows="6"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter step-by-step instructions"
              />
              {errors.steps && (
                <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
              )}
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                  Image URL (Optional)
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange} // Using event.target.value via handleChange
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="servings">
                  Servings *
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange} // Using event.target.value via handleChange
                  min="1"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.servings ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="4"
                />
                {errors.servings && (
                  <p className="mt-1 text-sm text-red-600">{errors.servings}</p>
                )}
              </div>
            </div>

            {/* Cooking Times */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prepTime">
                  Preparation Time *
                </label>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  value={formData.prepTime}
                  onChange={handleChange} // Using event.target.value via handleChange
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.prepTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="15 mins"
                />
                {errors.prepTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.prepTime}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cookTime">
                  Cooking Time *
                </label>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  value={formData.cookTime}
                  onChange={handleChange} // Using event.target.value via handleChange
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cookTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="30 mins"
                />
                {errors.cookTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.cookTime}</p>
                )}
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 font-medium rounded-lg ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } transition-colors`}
              >
                {isSubmitting ? 'Submitting...' : 'Add Recipe'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;